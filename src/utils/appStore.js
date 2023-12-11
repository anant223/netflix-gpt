import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import moveisReducer from "./movieSlice"
import GPTReducer from "./gptSlicie";
import langSliceReducer from "./langSlice"
const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: moveisReducer,
        GPT: GPTReducer,
        lang: langSliceReducer

    }
});

export default appStore;