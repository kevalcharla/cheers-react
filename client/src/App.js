import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const moviesData = await axios.get("http://localhost:5000/movies");

    // console.log(moviesData);
    setMovies(() => moviesData.data);
  }, []);

  return (
    <div className="App">
      {movies.map((movie) => (
        <div className="card" key={nanoid(5)}>
          <h3 className="heading">{movie.name}</h3>
          <p><strong className="bold">rating:</strong> <span id="rating">{movie.rating} &#9733;</span></p>
          <p><strong className="bold">release:</strong> {movie["release-date"]}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
