import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name:'cart',
  initialState: initialState,
  reducers: {
    addToCart:(state, action)=> {
        const existingItem = state.cartItems.find(item => item._id === action.payload._id);
        if(!existingItem) {
          state.cartItems.push(action.payload);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Book added to cart !!",
            showConfirmButton: false,
            timer: 1000
          });
        }else{
          Swal.fire({
            title: "Already added to the Cart",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
          })
        }
    },
    removeFromCart:(state, action) => {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  }
})

// export the action
export const { addToCart,removeFromCart ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;


