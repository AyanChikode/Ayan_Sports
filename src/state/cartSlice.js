import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ Add to Cart
    addToCart: (state, action) => {
      const productId = action.payload.id;

      const foundProduct = state.cartProducts.find(
        (product) => product.id === productId
      );

      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ Remove Product Completely
    removeProductFromCart: (state, action) => {
      const productId = action.payload;

      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== productId
      );
    },

    // ✅ Increase Quantity
    incrementByQuantity: (state, action) => {
      const productId = action.payload;

      const foundProduct = state.cartProducts.find(
        (product) => product.id === productId
      );

      if (foundProduct) {
        foundProduct.quantity += 1;
      }
    },

    // ✅ Decrease Quantity
    decrementByQuantity: (state, action) => {
      const productId = action.payload;

      const foundProduct = state.cartProducts.find(
        (product) => product.id === productId
      );

      if (foundProduct) {
        if (foundProduct.quantity > 1) {
          foundProduct.quantity -= 1;
        } else {
          // agar quantity 1 hai to remove kar do
          state.cartProducts = state.cartProducts.filter(
            (product) => product.id !== productId
          );
        }
      }
    },

    // ✅ Clear Entire Cart (Payment Success ke baad use hoga)
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

// ✅ Export actions
export const {
  addToCart,
  removeProductFromCart,
  incrementByQuantity,
  decrementByQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;