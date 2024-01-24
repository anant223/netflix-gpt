import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: { 
      nowPlayingMoveis: null, 
      playingTrailer: null, 
      tvShows: null, 
      selectedCategories: "All"
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMoveis = action.payload;
      },
      addMoviesTrailer: (state, action) => {
        state.playingTrailer = action.payload;
      },
      addTVShows: (state, action) => {
        state.tvShows = action.payload;
      },
      filterBasedOncategories: (state, action) =>{
        state.selectedCategories = action.payload;
      }
    },
});
export  const {addNowPlayingMovies, addMoviesTrailer, addTVShows, filterBasedOncategories} = movieSlice.actions;
export default movieSlice.reducer;