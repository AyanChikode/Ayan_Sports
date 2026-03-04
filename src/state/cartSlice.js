import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartAsync = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    return [];
  }
);


export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (product) => {
    return product;
  }
);


export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCart",
  async (id) => {
    return id;
  }
);


export const updateQuantityAsync = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, type }) => {
    return { id, type };
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    loading: false,
    error: null,
  },


  reducers: {
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },


  extraReducers: (builder) => {
    builder

      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.cartProducts = action.payload;
      })

      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.loading = false;

        const existingItem = state.cartProducts.find(
          (item) => item.id === action.payload.id
        );

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartProducts.push({
            ...action.payload,
            quantity: 1,
          });
        }
      })
      .addCase(addToCartAsync.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to add product";
      })

      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload
        );
      })

      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        const { id, type } = action.payload;

        const item = state.cartProducts.find((p) => p.id === id);

        if (item) {
          if (type === "increment") item.quantity += 1;
          if (type === "decrement" && item.quantity > 1)
            item.quantity -= 1;
        }
      });
  },
});


export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;