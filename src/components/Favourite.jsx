import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";

function Favourite() {
  const { favouriteMovies } = useMovieContext();
  if (favouriteMovies && favouriteMovies.length > 0) {
    return (
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold m-8 mb-4">
          Favourite Movies
        </h1>

        <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-auto gap-8">
          {favouriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold m-2 ">
        No Favourite Movies
      </h1>
      <p className="m-4">You have not added any favourite movies yet.</p>
    </div>
  );
}

export default Favourite;
