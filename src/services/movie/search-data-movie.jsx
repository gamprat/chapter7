import { http3 } from "../../utils/http3";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const reduxMovieSearch = async (page, query) => {
  console.log(page, query)
  const { data } = await http3.get(`${API_ENDPOINTS.SEARCH_MOVIE}?page=${page}&query=${query}`);
  return data;
}
