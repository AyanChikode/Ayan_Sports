import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';

function ProductInfo() {

    const { id } = useParams(); // 👈 URL se id
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
          .get(`https://695ea7dc2556fd22f6790bb6.mockapi.io/Products/${id}`)
          .then(res => setProduct(res.data));
    }, [id]);

    if (!product) return <h2 className="text-center">Loading...</h2>;

    return (
        <>
            <h1 className="text-center">Product Info</h1>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" />

                            <div className="card-body">
                                <h5>{product.title}</h5>
                                <h6>{product.brand}</h6>
                                <h4>₹ {product.price}</h4>
                                <del>₹ {product.mrp}</del>
                                <p>Size: {product.size}</p>

                                <button
                                    onClick={() =>
                                      dispatch(addToCart({ ...product, quantity: 1 }))
                                    }
                                    className="btn btn-primary"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductInfo;
