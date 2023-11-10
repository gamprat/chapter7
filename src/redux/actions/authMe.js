import { reduxGetUser } from "../../services/auth/get_user";
import { setDataUser } from "../reducers/auth/authMeSlice";

export const GetUser = () => (dispatch) => {
    reduxGetUser().then((result) => { 
    dispatch(setDataUser(result.data.data));
    console.log(result, "hasilnya");
    }).catch((err) => {

    });
}