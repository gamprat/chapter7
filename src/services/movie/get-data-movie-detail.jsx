import { useQuery } from "@tanstack/react-query";
//cara import file external
import {http3} from "../../utils/http3";
import { API_ENDPOINTS } from "../../utils/api-endpoints";

export const reduxMovieDetail = async (id) => {
    return await http3.get(`${API_ENDPOINTS.DETAIL_MOVIE}${id}`)
}