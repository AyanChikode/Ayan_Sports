import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';

function Allproducts() {

    let dispatch = useDispatch();

    // let apiurl = import.meta.env.VITE_BASE_URL;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products")
            .then((res) => {
                // console.log(res.data);
                setProducts(res.data);
            });
    }, []);

    function addProductToCart(product) {
        // console.log(product);

        const objData = {
            id: product.id,
            title: product.title,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1
        };

        // console.log(objData);

        dispatch(addToCart(objData))
    };


    return (
        <>
            <h1 className='text-center'>All Products</h1>
            <div className="container mt-4">
                <div className="row">
                    {products.map((item, i) => (
                        <div className="col-lg-3" key={i}>
                            <div class="card m-2" style={{ width: "18rem" }}>
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <h5>{item.category}</h5>
                                    <h5>{item.brand}</h5>
                                    <h3>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                        {item.price}</h3>
                                    <h5><del>{item.mrp}</del></h5>
                                    <h5>{item.size}</h5>

                                    <button onClick={() => addProductToCart(item)} class="btn btn-outline-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}


export default Allproducts;