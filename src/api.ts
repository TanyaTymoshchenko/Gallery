import axios from "axios";
import { UnsplashResponse } from "./api.types";

export default async function getImages(
  query: string,
  page: number
): Promise<UnsplashResponse> {
  const BASE_URL = "https://api.unsplash.com/";
  const endpoint = "/search/photos";
  const params = new URLSearchParams({
    query,
    client_id: "I3cyp7xXq-3udVez1FZJeYM4Mjjw4Xf1wbfZ1Z_CEGQ",
    page: page.toString(),
  });
  const { data } = await axios.get<UnsplashResponse>(
    `${BASE_URL}${endpoint}?${params}`
  );
  return {
    total: data.total,
    total_pages: data.total_pages,
    results: data.results,
  };
}