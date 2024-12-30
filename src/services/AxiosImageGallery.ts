import axios from "axios";

import { ApiResponse } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (
  searchImage: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>("/search/photos", {
    params: {
      query: searchImage,
      page,
      client_id: "S46MFdQUo6Bv7iVjTg2lTReq6ktjM50U3gK5xFMpWgY",
    },
  });
  return response.data;
};
