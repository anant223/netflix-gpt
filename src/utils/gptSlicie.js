import { createSlice } from "@reduxjs/toolkit";


export const GPTSlice = createSlice({
  name: "GPT",
  initialState: { showGPTSearch: false },
  reducers: {
    toggleGPTSearchView: (state, _) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const {toggleGPTSearchView} = GPTSlice.actions;

export default GPTSlice.reducer;
