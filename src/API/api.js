const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "cedf133d7dcf6aca26cad967e84e1e0b";

//api.themoviedb.org/3/discover/movie?api_key=cedf133d7dcf6aca26cad967e84e1e0b

// Return the full response so callers can access pagination fields (page, total_pages)
export const discoverMoviesURL = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const searchMoviesURL = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}`
  );
  const data = await response.json();
  return data;
};
