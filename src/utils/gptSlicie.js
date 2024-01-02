import { createSlice } from "@reduxjs/toolkit";

export const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
    movieName: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, _) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMoviesResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTSearchView, addGPTMoviesResult } = GPTSlice.actions;
export default GPTSlice.reducer;
