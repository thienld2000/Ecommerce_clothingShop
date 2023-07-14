import { configureStore } from "@reduxjs/toolkit";
import  cartReducer,{getTotals} from "./cartSlice"
import authSlice from "./authSlice";

 const store =configureStore({
    reducer:{
        cart: cartReducer,  
        // user: authSlice       
    },
})
store.dispatch(getTotals());
export default  store;