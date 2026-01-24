import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartProducts: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     console.log(action.payload);
        //     state.cartProducts.push(action.payload);
        // }

        addToCart: (state, action) => {
            let cartProducts = state.cartProducts;
            let productId = action.payload.id;

            const foundProduct = cartProducts.find((product) => {
                return product.id === productId
            });

            if (foundProduct) {
                foundProduct.quantity += 1;
            } else {
                state.cartProducts.push(action.payload);
            }

        },

        removeProductFromCart: (state, action) => {

            let productId = action.payload;

            const filteredProduct = state.cartProducts.filter((product) => {
                return product.id !== productId;
            });

            state.cartProducts = filteredProduct;

        },


        incrementByQuantity: (state, action) => {
            let productId = action.payload;

            const foundProduct = state.cartProducts.find((product) => {
                return product.id === productId;
            });

            if (foundProduct) {
                foundProduct.quantity += 1;
            }

        },

        decrementByQuantity: (state, action) => {
            let productId = action.payload;

            const foundProduct = state.cartProducts.find((product) => {
                return product.id === productId;
            });

            if (foundProduct && foundProduct.quantity > 1) {
                foundProduct.quantity -= 1;
            }

        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeProductFromCart, incrementByQuantity, decrementByQuantity } = cartSlice.actions

export default cartSlice.reducer