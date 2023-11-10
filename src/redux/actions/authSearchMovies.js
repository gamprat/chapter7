import { reduxMovieSearch } from '../../services/movie/search-data-movie'
import { setSearchMovie } from '../reducers/search/searchDataSlice'

export const SearchDataMovies = (query) => (dispatch) => {
  window.location.href = `/search/${query}`
}

export const searchMovies = (page, query) => async (dispatch) => {
      return reduxMovieSearch(page, query).then((result) => {
      console.log(result, "hasil")
      return dispatch(setSearchMovie(result));
    }).catch((err) => {
        
    });
}