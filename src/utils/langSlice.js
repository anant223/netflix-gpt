import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {language: 'eng'},
    reducers : {
        changeLang : (state, action) =>{
            state.language = action.payload
        }
    }

});
export  const {changeLang} = langSlice.actions;
export default langSlice.reducer;