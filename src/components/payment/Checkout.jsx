import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../../state/cartSlice";
import "./Checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const [billing, setBilling] = useState({
    country: "India",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!cartProducts.length) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    if (!accepted) {
      alert("Please accept terms & conditions");
      return;
    }

    if (!billing.firstName || !billing.email || !billing.phone) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const options = {
        key: "rzp_test_4yosHYDduPYmKN",
        amount: total * 100, // Razorpay paisa me leta hai
        currency: "INR",
        name: "My Store",
        description: "Order Payment",

        handler: async function (response) {
          try {
            await axios.post(
              "https://695b986a1d8041d5eeb77c41.mockapi.io/orders",
              {
                billing,
                products: cartProducts,
                amount: total,
                payment_id: response.razorpay_payment_id,
                payment_status: "success",
                createdAt: new Date(),
              }
            );

            alert("Payment Successful 🎉");
            dispatch(clearCart());
          } catch (error) {
            alert("Order Save Failed ❌");
          }
        },

        prefill: {
          name: billing.firstName + " " + billing.lastName,
          email: billing.email,
          contact: billing.phone,
        },

        theme: {
          color: "#0d6efd",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      setLoading(false);
    } catch (error) {
      alert("Payment Failed ❌");
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page py-5">
      <div className="container">
        <div className="row g-4">
          {/* Billing Section */}
          <div className="col-lg-8">
            <div className="checkout-card p-4 shadow-sm">
              <h4 className="mb-4">Billing Details</h4>

              <select
                name="country"
                value={billing.country}
                onChange={handleChange}
                className="form-select mb-3"
              >
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    name="firstName"
                    value={billing.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First Name *"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    name="lastName"
                    value={billing.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <input
                name="address"
                value={billing.address}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Address"
              />

              <input
                name="city"
                value={billing.city}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="City"
              />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    name="state"
                    value={billing.state}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="State"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    name="zip"
                    value={billing.zip}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    name="email"
                    value={billing.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email *"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    name="phone"
                    value={billing.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Phone *"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="checkout-card p-4 shadow-sm mb-4">
              <h5 className="mb-3">Order Summary</h5>

              {cartProducts.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>
                    {item.quantity} × {item.title}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="d-flex justify-content-between fw-bold mt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="checkout-card p-4 shadow-sm">
              <h5 className="mb-3">Payment</h5>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
                />
                <label className="form-check-label">
                  I accept terms & conditions
                </label>
              </div>

              <button
                disabled={!accepted || loading}
                onClick={handlePayment}
                className="btn btn-primary w-100"
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;