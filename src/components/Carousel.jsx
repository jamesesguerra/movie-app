import { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem";
import movieService from "../actions/movies";


const Carousel = ({ section, movieId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getFeaturedList(section, movieId)
      .then(data => setMovies(data["results"]));
  }, []);

  return (
    <div className="carousel carousel-center space-x-4 pb-4">
      {movies.map((movie) => {
        return (
          <CarouselItem movie={movie} key={movie.id} />
        );
      })}
    </div>
  );
};

export default Carousel;