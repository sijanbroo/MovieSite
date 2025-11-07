import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
// import { ReactToast } from "./components/ReactToast";
// import { PaginationBtn } from "./Pagination/Pagination";

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
