import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';
import { useNavigate } from 'react-router-dom';

function Allproducts() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
          .get("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products")
          .then(res => setProducts(res.data));
    }, []);

    function addProductToCart(product) {
        dispatch(addToCart({ ...product, quantity: 1 }));
    }

    // 👇 image click handler
    function openProductInfo(id) {
        navigate(`/productinfo/${id}`);
    }

    return (
        <>
            <h1 className="text-center">All Products</h1>

            <div className="container mt-4">
                <div className="row">
                    {products.map((item) => (
                        <div className="col-lg-3" key={item.id}>
                            <div className="card m-2">

                                {/* 👇 image click */}
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openProductInfo(item.id)}
                                />

                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <h6>{item.brand}</h6>
                                    <h4>₹ {item.price}</h4>
                                    <del>₹ {item.mrp}</del>

                                    <button
                                        onClick={() => addProductToCart(item)}
                                        className="btn btn-outline-primary mt-2"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Allproducts;
