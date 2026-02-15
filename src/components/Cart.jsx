import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  incrementByQuantity,
  decrementByQuantity,
} from "../state/cartSlice";
import { Link, useNavigate } from "react-router-dom";


function Cart() {
    const dispatch = useDispatch();
    let navigate = useNavigate ();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  /* ================== CALCULATIONS ================== */

  const itemTotal = useMemo(() => {
    return cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartProducts]);

  const deliveryCharge = useMemo(
    () => (itemTotal >= 5000 ? 0 : 50),
    [itemTotal]
  );

  const discount = useMemo(
    () => (itemTotal >= 10000 ? 500 : 0),
    [itemTotal]
  );

  const finalTotal = useMemo(
    () => itemTotal + deliveryCharge - discount,
    [itemTotal, deliveryCharge, discount]
  );
    function handleSubmit(e){
        e.preventDefault
        navigate("/checkout")

    }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  {/* ================== LEFT ================== */}
                  <div className="col-lg-9">
                    <div className="p-5">
                      <h1 className="fw-bold mb-5">Shopping Cart</h1>
                      <hr />

                      {cartProducts.length === 0 ? (
                        <h5 className="text-center text-muted">
                          Your cart is empty 🛒
                        </h5>
                      ) : (
                        cartProducts.map((product) => (
                          <div
                            key={product.id}
                            className="row mb-4 d-flex justify-content-between align-items-center"
                          >
                            <div className="col-md-2 col-lg-1">
                              <img
                                src={product.path}
                                className="img-fluid rounded-3"
                                alt={product.title}
                              />
                            </div>

                            <div className="col-md-3 col-lg-3">
                              <h6 className="text-muted">{product.brand}</h6>
                              <h6>{product.title}</h6>
                            </div>

                            <div className="col-md-2">
                              ₹ {product.price}
                            </div>

                            <div className="col-md-3 d-flex align-items-center">
                              <button
                                className="btn btn-link px-2"
                                onClick={() =>
                                  dispatch(decrementByQuantity(product.id))
                                }
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                type="number"
                                value={product.quantity}
                                readOnly
                                className="form-control form-control-sm text-center"
                                style={{ width: "100px" }}
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={() =>
                                  dispatch(incrementByQuantity(product.id))
                                }
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>

                            <div className="col-md-2">
                              ₹ {product.price * product.quantity}
                            </div>

                            <div className="col-md-1 text-end">
                              <button
                                className="text-muted btn"
                                onClick={() =>
                                  dispatch(
                                    removeProductFromCart(product.id)
                                  )
                                }
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>

                            <hr />
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="col-lg-3 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-4">Summary</h3>
                      <hr />

                      <div className="d-flex justify-content-between mb-3">
                        <span>Item Total</span>
                        <span>₹ {itemTotal}</span>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>
                          {deliveryCharge === 0
                            ? "FREE"
                            : `₹ ${deliveryCharge}`}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between mb-3 text-danger">
                        <span>Discount</span>
                        <span> ₹ {discount}</span>
                      </div>

                      <hr />

                      <div className="d-flex justify-content-between mb-4 fw-bold">
                        <span>Total</span>
                        <span>₹ {finalTotal}</span>
                      </div>
                    {/* <Link to="/checkout"> */}
                      <button onClick={handleSubmit}className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold shadow-sm w-100">
                        Checkout
                      </button>
                    {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
