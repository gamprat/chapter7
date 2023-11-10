import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { setIsLoggedIn, setToken, setTokenGoogle } from '../reducers/auth/authLoginSlice';
import { reduxLoginUser } from '../../services/auth/login_user';

export const LoginUser = (input) => (dispatch) => {
    reduxLoginUser(input).then((result) => {
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token));
    dispatch(setIsLoggedIn(true));
    window.location.href = '/dashboard'
  }).catch((err) => {
    
  });
}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined))
    dispatch(setIsLoggedIn(false))
    CookieStorage.remove(CookieKeys.AuthToken)
    window.location.href = '/'
}