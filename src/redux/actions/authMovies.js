import { reduxDataMovie } from "../../services/movie/get-data-movie";
import { setDataMovie } from "../reducers/movie/movieDataSlice";

export const DataMovie = (page) => (dispatch) => {
      return reduxDataMovie(page).then((result) => {
      return dispatch(setDataMovie(result.data.data))
    // console.log(result, "hasil")
    }).catch((err) => {

    });
}