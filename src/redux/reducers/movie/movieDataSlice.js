import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataMovie: [],
};

const movieDataSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {
    setDataMovie: (state, action) => {
      state.dataMovie = action.payload;
    },
  },
});

export const { setDataMovie } = movieDataSlice.actions;

export default movieDataSlice.reducer;