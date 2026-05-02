import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/Logo.png" alt="Logo" className="logo-img" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/allproducts" className="nav-link">
                All Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/adminlogin" className="nav-link admin-link">
                Admin Login
              </Link>
            </li>

          </ul>

          {/* Cart */}
          <Link to="/cart" className="cart-link">
            <div className="cart-box">
              <i className="fa-solid fa-cart-shopping cart-icon"></i>

              <span className="cart-badge">
                {cartProducts.length}
              </span>
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Header;