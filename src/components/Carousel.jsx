import { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem"
import movieService from '../actions/movies';


const Carousel = ({ section }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getFeaturedList(section)
      .then(data => setMovies(data['results']))
  }, [])

  return (
    <div className="carousel carousel-center space-x-4 h-96 pb-10">
        {movies.map((movie) => {
          return (
            <CarouselItem movie={movie} />
          )
        })}
    </div>
  )
}

export default Carousel