import { useQuery } from "@tanstack/react-query";
//cara import file external
import {http} from "../../utils/http";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { http3 } from "../../utils/http3";

export const reduxDataMovie = async (page) => {
  return await http3.get(`${API_ENDPOINTS.POPULAR_MOVIE}?page=${page}`);
};