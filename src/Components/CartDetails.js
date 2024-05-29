import "./Cartstyle.css";
import toast from 'react-hot-toast';
import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Features/CartSlice";
import { removeToCart } from "../redux/Features/CartSlice";
import { removeSingleItems } from "../redux/Features/CartSlice";
import { emptyCartItem } from "../redux/Features/CartSlice";
const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalPrice,setPrice] = useState(0);
  const [totalQuantity,setTotalQuantity] = useState(0);
  //add to cart
  const dispatch =useDispatch();
  const handleIncrement =(e)=>{
    dispatch(addToCart(e));
  }
  const handleDelete=(e)=>{
    dispatch(removeToCart(e));
    toast.success("Item remove from your cart")
  }
  //remove single items

  const handleSingleItem =(e)=>{
    dispatch(removeSingleItems(e))
  }
  //empty cart
  const emptyCart=()=>{
    dispatch(emptyCartItem())
    toast.success("your cart is empty")
  }
  //count total price
  const total=()=>{
    let totalPrice=0;
    carts.map((ele,ind)=>{
      totalPrice=ele.price*ele.qnty+totalPrice;
    });
    setPrice(totalPrice)
  }

  useEffect(()=>{
    total()
  },[total])

  //count total quantity
  const C_Quantity=()=>{
    let totalQuantity=0;
    carts.map((ele,ind)=>{
      totalQuantity=ele.qnty+totalQuantity;
    });
    setTotalQuantity(totalQuantity)
  }

  useEffect(()=>{
    C_Quantity()
  },[C_Quantity])

  return (
    <React.Fragment>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart Calculation{carts.length>0 ? `(${carts.length})`:""}</h5>
                {carts.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm" onClick={()=>emptyCart()}>
                  <i class="bi bi-trash3-fill"></i>
                    <span>EmptyCart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-cody p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>your cart is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th className="text-right">
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      console.log(data);
                      return (
                        <React.Fragment>
                          <tr>
                            <td>
                              <button className="prdct-delete" onClick={()=>handleDelete(data.id)}>
                              <i class="bi bi-trash3-fill"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata}></img>
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button" onClick={data.qnty<=1 ? ()=>handleDelete(data.id) : ()=>handleSingleItem(data)}>
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                ></input>
                                <button className="prdct-qty-btn" type="button" onClick={()=>handleIncrement(data)}>
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">{data.qnty * data.price}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                  <tfoot>
                  <tr><th>&nbsp;</th>
                  <th colSpan={3}>&nbsp;</th>
                  <th>Item In Cart <span className="ml-2 mr-2">:</span><span className="text-danger">{totalQuantity}</span></th>
                  <th className="text-right">Total Price <span className="ml-2 mr-2">:</span><span className="text-danger">{totalPrice}</span></th>
                  
                  </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartDetails;
