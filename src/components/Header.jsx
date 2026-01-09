import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to={"/"}>
                        <a class="navbar-brand" href="#">
                            <img style={{ width: "100px" }} src="/assets/images/Logo.png" alt="" />
                        </a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/about"} class="nav-item text-decoration-none">
                                <a class="nav-link" href="#">About</a>
                            </Link>
                            <Link to={"/contact"} class="nav-item text-decoration-none">
                                <a class="nav-link" href="#">Contact</a>
                            </Link>
                            <Link to={"/allproducts"} class="nav-item text-decoration-none">
                                <a class="nav-link" href="#">All-Products</a>
                            </Link>
                            <Link to={"/adminlogin"} class="nav-item text-decoration-none">
                                <a class="nav-link" href="#">Admin Login</a>
                            </Link>
                            <Link to={"/addproduct"} class="nav-item text-decoration-none">
                                <a class="nav-link" href="#">Add Product</a>
                            </Link>
                            <Link to={"/products"} class="nav-item text-decoration-none">
                                <a class="nav-link" href="#">Products</a>
                            </Link>
                        </ul>

                        <form class="d-flex me-5">
                            <i class="fa-solid fa-cart-shopping fa-xl"></i>[0]
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header