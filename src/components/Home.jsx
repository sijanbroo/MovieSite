import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { discoverMoviesURL, searchMoviesURL } from "../API/api";
// import Commet from "react-loading-indicators";
// const movies = [
//   {
//     id: 1,
//     poster_path: "/path_to_poster.jpg",
//     original_title: "Sample Movie",
//     vote_average: 8.5,
//     release_date: "2023-05-15",
//   },
//   {
//     id: 2,
//     poster_path: "/path_to_poster.jpg",
//     original_title: "Sample Movie 1",
//     vote_average: 10,
//     release_date: "2025-05-15",
//   },
//   {
//     id: 2,
//     poster_path: "/path_to_poster.jpg",
//     original_title: "Sample Movie 1",
//     vote_average: 10,
//     release_date: "2025-05-15",
//   },
//   {
//     id: 2,
//     poster_path: "/path_to_poster.jpg",
//     original_title: "Sample Movie 1",
//     vote_average: 10,
//     release_date: "2025-05-15",
//   },
//   {
//     id: 2,
//     poster_path: "/path_to_poster.jpg",
//     original_title: "Sample Movie 1",
//     vote_average: 10,
//     release_date: "2025-05-15",
//   },
//   {
//     id: 2,
//     poster_path: "/path_to_poster.jpg",
//     original_title: "Sample Movie 1",
//     vote_average: 10,
//     release_date: "2025-05-15",
//   },
//   // Add more movie objects as needed
// ];

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovies = async (p = 1) => {
      setLoading(true);
      try {
        const moviesData = await discoverMoviesURL(p);
        // moviesData contains results, page, total_pages
        setMovies(moviesData.results || []);
        setPage(moviesData.page || p);
        setTotalPages(moviesData.total_pages || 1);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies(1);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    if (search.trim() === "") {
      // if search cleared, load discover
      try {
        const moviesData = await discoverMoviesURL(1);
        setMovies(moviesData.results || []);
        setTotalPages(moviesData.total_pages || 1);
      } catch (error) {
        setError(error.message);
      }
      return;
    }
    try {
      const searchResults = await searchMoviesURL(search, 1);
      setMovies(searchResults.results || []);
      setTotalPages(searchResults.total_pages || 1);
    } catch (error) {
      setError(error.message);
    }
  };

  const goToPage = async (p) => {
    if (p < 1 || p > totalPages) return;
    setLoading(true);
    try {
      if (search.trim() === "") {
        const moviesData = await discoverMoviesURL(p);
        setMovies(moviesData.results || []);
        setPage(moviesData.page || p);
        setTotalPages(moviesData.total_pages || 1);
      } else {
        const moviesData = await searchMoviesURL(search, p);
        setMovies(moviesData.results || []);
        setPage(moviesData.page || p);
        setTotalPages(moviesData.total_pages || 1);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mt-12">
      <form onSubmit={handleSearch} className=" mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="p-2  border border-gray-300 rounded-lg w-[50%] mr-4 mb-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 w-[100px] text-lg bg-indigo-500 text-white rounded-lg ml-2"
        >
          Search
        </button>
      </form>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-auto gap-8">
        {loading ? (
          <p>Loading...</p>
        ) : movies?.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>{error || "No movies found"}</p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1 || loading}
        >
          Prev
        </button>

        {/* Simple page window: show up to 5 pages */}
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          // compute start page so current page is centered when possible
          const half = Math.floor(5 / 2);
          let start = Math.max(1, page - half);
          if (start + 4 > totalPages) start = Math.max(1, totalPages - 4);
          return start + i;
        }).map((p) => (
          <button
            key={p}
            className={`px-3 py-1 rounded ${
              p === page ? "bg-indigo-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => goToPage(p)}
            disabled={loading}
          >
            {p}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
