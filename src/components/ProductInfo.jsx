import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';

function ProductInfo() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://695ea7dc2556fd22f6790bb6.mockapi.io/Products/${id}`)
            .then((res) => {
                setProduct(res.data);
                console.log(res.data)
            });


    }, [id]);

    if (!product) return <h2 className="text-center">Loading...</h2>;

    return (
        <>

            <div class="container mt-5">

                <h1 className="text-center">Product Info</h1>

                <div class="row">
                    {/* <!-- Product Images --> */}
                    <div class="col-md-6 mb-4">
                        <img src={product.image} alt="Product" class="img-fluid rounded mb-3 product-image" id="mainImage" />
                        <div class="d-flex justify-content-between">
                            {/* <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 1" class="thumbnail rounded active" onclick="changeImage(event, this.src)"/>
                                    <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 2" class="thumbnail rounded" onclick="changeImage(event, this.src)"/>
                                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 3" class="thumbnail rounded" onclick="changeImage(event, this.src)"/>
                                            <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 4" class="thumbnail rounded" onclick="changeImage(event, this.src)"/> */}
                        </div>
                    </div>

                    {/* <!-- Product Details --> */}
                    <div class="col-md-6">
                        <h2 class="mb-3">{product.title}</h2>
                        {/* <p class="text-muted mb-4">SKU: WH1000XM4</p> */}
                        <div class="mb-3">
                            <span class="h4 me-2">₹{product.price}</span>
                            <span class="text-muted"><s>₹{product.mrp}</s></span>
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-half text-warning"></i>
                            {/* <span class="ms-2">4.5 (120 reviews)</span> */}
                        </div>
                        <p class="mb-4">Experience premium sound quality and industry-leading noise cancellation with these wireless
                            headphones. Perfect for music lovers and frequent travelers.</p>
                        <div class="mb-4">
                            {/* <h5>Color:</h5>
                            <div class="btn-group" role="group" aria-label="Color selection">
                                <input type="radio" class="btn-check" name="color" id="black" autocomplete="off" checked />
                                <label class="btn btn-outline-dark" for="black">Black</label>
                                <input type="radio" class="btn-check" name="color" id="silver" autocomplete="off" />
                                <label class="btn btn-outline-secondary" for="silver">Silver</label>
                                <input type="radio" class="btn-check" name="color" id="blue" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="blue">Blue</label>
                            </div> */}
                        </div>
                        {/* <div class="mb-4">
                            <label for="quantity" class="form-label">Quantity:</label>
                            <input type="number" class="form-control" id="quantity" value="1" min="1" style={{ width: "80px" }} />
                        </div> */}
                        <button onClick={() =>
                                      dispatch(addToCart({ ...product, quantity: 1 }))
                                    }class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold " >
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        {/* <button    class="btn btn-outline-secondary btn-lg mb-3">
                            <i class="bi bi-heart"></i> Add to Wishlist
                        </button> */}
                        {/* <div class="mt-4"> */}
                            {/* <h5>Key Features:</h5>
                            <ul>
                                <li>Industry-leading noise cancellation</li>
                                <li>30-hour battery life</li>
                                <li>Touch sensor controls</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductInfo;
