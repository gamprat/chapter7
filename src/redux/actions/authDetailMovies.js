import { reduxMovieDetail } from '../../services/movie/get-data-movie-detail'
import { setDataMovie } from '../reducers/movie/movieDataSlice';
import { setDetailMovie } from '../reducers/movie/movieDetailSlice';

export const DetailMovie = (id) => (dispatch) => {
    return reduxMovieDetail(id).then((result) => {
    return dispatch(setDetailMovie(result.data.data));
  }).catch((err) => {
    
  });
}
