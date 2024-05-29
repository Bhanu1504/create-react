import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToCart } from "../redux/Features/CartSlice.js";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const Home = () => {
  const [product,setProducts]= useState(Cardsdata);
  const [searchVal,setSearchval] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const dispatch = useDispatch();

  //add to cart
  const send=(e)=>{
    dispatch(addToCart(e))
    toast.success("Item Added In Your Cart")
  }
    
 function handleSearchClick(){
  if(searchVal === ""){
    setProducts(Cardsdata);
    setIsSearched(false)
     return;
    }
    const filterBySearch = Cardsdata.filter((item)=>{
      console.log(item)
      if(item.dish.toLowerCase().includes(searchVal.toLowerCase()))
        {
          console.log(item.dish)
          return item.dish;
        }     
    })
    setProducts(filterBySearch);
    setIsSearched(true)
    
  }

  return (
    <div>
      <section className="item_section mt-4 container">
      <div><input type="text"size={60} style={{height:"100px"}} placeholder="Search....." style={{position:"absolute",top:"15px",left:"30em",border:"none",borderRadius:"8px"}} onChange={e=>{setSearchval(e.target.value)}} ></input>
      <button onClick={handleSearchClick} style={{background:"white",border:"none",position:"absolute",top:"14.8px",left:"57.5em",borderRadius:"8px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIL8bNPb4TxfgyTAKaXpNBuxLzztq7ZPuKg&s" style={{height:"19.5px",width:"28px",borderRadius:"8px"}}></img></button></div> 
      <div className="row mt-2 d-flex justify-content-around align-items-center">
        {!isSearched && <h2 className="px-4" style={{ fontWeight: "400" }}>
          Restaurants In Hyderabad Open Now
          </h2>}
          {product.length>0 ? product.map((element) => {
            return (
              <React.Fragment key={element.id}>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img variant="top" className="cd" src={element.imgdata} />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between">
                      <h5>{element.address}</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="Img" alt=""></img>
                      <Button
                        className="mt-2 mb-2"
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        onClick={()=>send(element)}
                        variant="outline-light"
                      >
                        Add To Cart
                      </Button>
                      <img src={element.imgdata} className="laimg" alt=""></img>
                    </div>
                  </div>
                </Card>
              </React.Fragment>
            );
          })

          :"not found"
        }
        </div>
      </section>
    </div>
  );
};

export default Home;
