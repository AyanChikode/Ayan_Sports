import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

function Checkout() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="row g-4">

          {/* ================= BILLING ================= */}
          <div className="col-lg-8">
            <div className="checkout-card">
              <h4 className="checkout-title">Billing Details</h4>

              <div className="mb-3">
                <label className="form-label">Country</label>
                <select className="form-select">
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <input className="form-control mb-3" placeholder="Address" />
              <input className="form-control mb-3" placeholder="City" />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="State" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Zip Code" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Phone" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= SUMMARY ================= */}
          <div className="col-lg-4">
            <div className="checkout-card summary-box mb-4">
              <h5 className="checkout-title">Order Summary</h5>

              {cartProducts.map((item) => (
                <div key={item.id} className="summary-row">
                  <span>{item.quantity} × {item.title}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}

              <hr />

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="summary-row fw-bold mt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="checkout-card">
              <h5 className="checkout-title">Payment</h5>

              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="pay" />
                <label className="form-check-label">
                  Cash on Delivery
                </label>
              </div>

              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  I accept terms & conditions
                </label>
              </div>

              <button className="btn btn-outline-primary w-100 place-order-btn">
                Place Order
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
