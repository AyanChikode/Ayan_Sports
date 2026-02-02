import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, incrementByQuantity, decrementByQuantity } from '../state/cartSlice';

function Cart() {

    let dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartProducts);

    console.log(cartProducts);
    const itemTotal = cartProducts.reduce(
        (total , item ) => total  +  item.price * item.quantity,
        0
    );
    const deliveryCharge = itemTotal >= 3500 ? 0 : 50 ;

    const finalTotal = itemTotal + deliveryCharge 


    return (
        <>
            <section class="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div class="card-body p-0">
                                    <div class="row g-0">
                                        <div class="col-lg-9">
                                            <div class="p-5">
                                                <div class="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 class="fw-bold mb-0">Shopping Cart</h1>
                                                    <h6 class="mb-0 text-muted">3 items</h6>
                                                </div>
                                                <hr class="my-4" />

                                                {
                                                    cartProducts.map((product) => {
                                                        return (
                                                            <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div class="col-md-2 col-lg-1 col-xl-1">
                                                                    <img
                                                                        src={product.image}
                                                                        class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                </div>
                                                                <div class="col-md-3 col-lg-1 col-xl-3">
                                                                    <h6 class="text-muted">{product.brand}</h6>
                                                                    <h6 class="mb-0">{product.title}</h6>
                                                                </div>

                                                                <div class="col-md-3 col-lg-1 col-xl-1 offset-lg-1">
                                                                    <h6 class="mb-0">₹ {product.price}</h6>
                                                                </div>

                                                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <button
                                                                    onClick={()=>dispatch(decrementByQuantity(product.id))}
                                                                    data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2" >
                                                                        <i class="fas fa-minus"></i>
                                                                    </button>

                                                                    {/* <input id="form1" min={0} name="quantity" defaultValue={1} type="number"
                                                            class="form-control form-control-sm text-dark" /> */}

                                                                    <input
                                                                        id="form1"
                                                                        min={0}
                                                                        name="quantity"
                                                                        type="number"
                                                                        value={product.quantity}
                                                                        className="form-control form-control-sm text-dark"
                                                                        style={{
                                                                            width: "60px",
                                                                            textAlign: "center",
                                                                            lineHeight: "1.5"
                                                                        }}
                                                                    />
                                                                    <button
                                                                        onClick={() => dispatch(incrementByQuantity(product.id))}
                                                                        data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2" >
                                                                        <i class="fas fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 class="mb-0">₹ {product.price * product.quantity}</h6>
                                                                </div>
                                                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <button onClick={() => dispatch(removeProductFromCart(product.id))} class="text-muted"><i class="fas fa-times"></i></button>
                                                                </div>
                                                                <hr class="my-4" />
                                                            </div>
                                                        )
                                                    })
                                                }



                                                <div class="pt-5">
                                                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                                                        class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 bg-body-tertiary">
                                            <div class="p-5">
                                                <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr class="my-4" />

                                                <div class="d-flex justify-content-between mb-4">
                                                    <h5 class="text-success">Item Total</h5>
                                                    <h5 className="text-success">₹{itemTotal}</h5>
                                                </div>

                                                <h5 class="text-uppercase mb-3">Shipping</h5>

                                                <div class="mb-4 pb-2">
                                                    
                                                        <span>Standard-Delivery</span>
                                                        <span className='ms-5'>
                                                            {deliveryCharge === 0
                                                                ? "FREE"
                                                                : `₹ 
                                                                ${deliveryCharge}`}
                                                        </span>
                                                    
                                                </div>

                                                <h5 class="text-uppercase mb-3">Give code</h5>

                                                <div class="mb-5">
                                                    <div data-mdb-input-init class="form-outline">
                                                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Examplea2">Enter your code</label>
                                                    </div>
                                                </div>

                                                <hr class="my-4" />

                                                 <div className="d-flex justify-content-between mb-4">
                                                    <strong>Total</strong>
                                                    <strong>₹ {finalTotal}</strong>
                                                 </div>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Register</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart