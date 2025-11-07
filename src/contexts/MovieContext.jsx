import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favouriteMovies, setFavouriteMovies] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("favourite");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const addToFavourites = (movie) => {
    setFavouriteMovies((prev) => [...prev, movie]);
  };

  const removeFromFavourites = (movieId) => {
    setFavouriteMovies((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavouriteMovie = (movieId) => {
    return favouriteMovies.some((movie) => movie.id === movieId);
  };

  const value = {
    favouriteMovies,
    addToFavourites,
    removeFromFavourites,
    isFavouriteMovie,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
