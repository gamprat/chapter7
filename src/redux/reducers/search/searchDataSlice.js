import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: [],
};

const searchDataSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchMovie: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearchMovie } = searchDataSlice.actions;

export default searchDataSlice.reducer;
