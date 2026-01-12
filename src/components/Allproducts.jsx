import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Allproducts() {
    // let apiurl = import.meta.env.VITE_BASE_URL;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            });
    }, []);


    return (
        <>
            <h1 className='text-center'>All Products</h1>
            <div className="container mt-4">
                <div className="row">
                    {products.map((item) => (
                        <div className="col-lg-3">
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
                                  
                                    <a href="#" class="btn btn-outline-primary ">Add to Cart</a>
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