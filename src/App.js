import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import MovieDetails from "./components/MovieDetails";
import MoviesAntes1940 from "./components/MoviesAntes1940";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/moviesAntes1940" element={<MoviesAntes1940/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
