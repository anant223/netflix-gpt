import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import moveisReducer from "./movieSlice"
const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: moveisReducer
    }
});

export default appStore;