import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCartAsync,
  updateQuantityAsync,
} from "../state/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cartProducts, loading, error } = useSelector(
    (state) => state.cart
  );

  /* CALCULATIONS using useMemo */

  const itemTotal = useMemo(() => {
    return cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartProducts]);

  const deliveryCharge = useMemo(() => {
    return itemTotal >= 5000 ? 0 : 50;
  }, [itemTotal]);

  const discount = useMemo(() => {
    return itemTotal >= 10000 ? 500 : 0;
  }, [itemTotal]);

  const finalTotal = useMemo(() => {
    return itemTotal + deliveryCharge - discount;
  }, [itemTotal, deliveryCharge, discount]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartProducts.length === 0 && (
        <p>Your cart is empty 🛒</p>
      )}

      {cartProducts.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border p-3 mb-3"
        >
            <img style={{ width: "100px", height:"100px"}} src={item.path} />
          <div>
            <h5>{item.title}</h5>
            <p>₹ {item.price}</p>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() =>
                dispatch(updateQuantityAsync({ id: item.id, type: "decrement" }))
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() =>
                dispatch(updateQuantityAsync({ id: item.id, type: "increment" }))
              }
            >
              +
            </button>
          </div>

          <div>₹ {item.price * item.quantity}</div>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCartAsync(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <div className="text-end">
        <p>Item Total: ₹ {itemTotal}</p>
        <p>
          Delivery: {deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}
        </p>
        <p className="text-danger">Discount: ₹ {discount}</p>
        <h4>Total: ₹ {finalTotal}</h4>
      </div>
    </div>
  );
}

export default Cart;