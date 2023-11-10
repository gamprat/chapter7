import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import movieDataSlice from "./movie/movieDataSlice";
import searchDataSlice from "./search/searchDataSlice";
import authMeSlice from "./auth/authMeSlice";
import movieDetailSlice from "./movie/movieDetailSlice";

export default combineReducers({
    auth: authLoginSlice,
    movie: movieDataSlice,
    detail: movieDetailSlice,
    search: searchDataSlice,
    me: authMeSlice,
})