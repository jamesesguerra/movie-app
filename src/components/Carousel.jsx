import { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem"
import movieService from '../actions/movies';


const Carousel = ({ section, movieId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getFeaturedList(section, movieId)
      .then(data => setMovies(data['results']))
  }, [])

  return (
    <div className="carousel carousel-center space-x-4 h-96">
        {movies.map((movie) => {
          return (
            <CarouselItem movie={movie} />
          )
        })}
    </div>
  )
}

export default Carousel