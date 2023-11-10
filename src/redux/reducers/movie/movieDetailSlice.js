import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailMovie: [],
};

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    setDetailMovie: (state, action) => {
      state.detailMovie = action.payload;
    },
  },
});

export const { setDetailMovie } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
