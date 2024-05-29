import {configureStore, congiureStore} from "@reduxjs/toolkit";
import CartSlice from "../Features/CartSlice";

//create store

export const store = configureStore({
    reducer:{
        allCart:CartSlice,
    }

})