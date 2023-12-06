import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {nowPlayingMoveis: null, playingTrailer: null},

    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMoveis = action.payload
        },
        addMoviesTrailer : (state, action) =>{
            state.playingTrailer = action.payload
        }

    }
})
export  const {addNowPlayingMovies, addMoviesTrailer} = movieSlice.actions;
export default movieSlice.reducer;