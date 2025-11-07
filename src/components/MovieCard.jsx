import React from "react";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavourites, removeFromFavourites, isFavouriteMovie } =
    useMovieContext();
  const favourite = isFavouriteMovie(movie.id);

  const handleFavouriteClick = (e) => {
    e.preventDefault();
    favourite ? removeFromFavourites(movie.id) : addToFavourites(movie);
  };

  return (
    // Fixed height for consistency; tweak number if needed
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-[#F4F0EC] dark:border-gray-300 h-[520px] flex flex-col overflow-hidden">
      {/* Poster area with consistent aspect */}
      <div className="w-full aspect-2/3 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title || "Poster"}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 min-w-0">
        {/* Title clamped to 2 lines (fallback below if you don't use line-clamp) */}
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black line-clamp-2">
          {movie.original_title}
        </h5>

        {/* FOOTER pinned to bottom, in COLUMN */}
        <div className="mt-auto flex flex-col gap-2">
          <p className="text-gray-700 dark:text-gray-400">
            {movie.release_date?.split("-")[0] || "—"} | ⭐{" "}
            {movie.vote_average ?? "—"}
          </p>

          <button
            onClick={handleFavouriteClick}
            className={`inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none cursor-pointer w-full ${
              favourite
                ? "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }`}
            title={favourite ? "Remove from favourites" : "Add to favourites"}
          >
            {favourite ? "Remove Favourite" : "Add to Favourite"}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
