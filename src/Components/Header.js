import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const { carts } = useSelector((state) => state.allCart);
  

  return (
    <React.Fragment>
      <Navbar style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-2">
          <h3 className="text-light">ShopEasy</h3>
          </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
          <div id="ex4">
            <span
              className="p1 fa-stack fa-2x has-badge"
              data-count={carts.length}
            >
              <i
                class="bi bi-cart-fill"
                style={{ position: "relative", left: "15px", top: "-2px" }}
              ></i>
            </span>
          </div>
          </NavLink>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
//data-count--attribute selector and counters content
