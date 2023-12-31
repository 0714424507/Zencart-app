import React from "react";
import Search from "./Search";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import { useCart } from "./Product/CartContext";

import { Link } from "react-router-dom";

function TopLayout() {
  const { cartItems } = useCart();
  return (
    <div className="top-layout">
      <Topbar />
      <div className="header"></div>
      <Navbar />
      <div className="third-layer">
        <nav className="navbarthird">
          <a className="logo-link" href="/">
            <h1 className="logo">
              zen<span>cart</span>
            </h1>
          </a>

          <Search />
          <Link className="cart-link" to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart ({cartItems.length})
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default TopLayout;