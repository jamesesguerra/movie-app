import { useState, useEffect } from "react";
import Flickity from "react-flickity-component";

import CarouselItem from "./CarouselItem";
import movieService from "../actions/movies";
import "../flickity.css";


const CarouselTwo = ({ section, movieId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getFeaturedList(section, movieId)
      .then(data => setMovies(data["results"]));
  }, []);

  const flickityOptions = {
    freeScroll: true,
    contain: true,
    cellAlign: "left",
    prevNextButtons: true,
    pageDots: false,
    freeScrollFriction: 0.2,
    selectedAttraction: 0.01,
    friction: 0.15,
    groupCells: "100%",
    resize: true,
  };

  return (
    <div className="pb-8">
      <Flickity className="slider" options={flickityOptions}>
        {movies.map((movie) => {
          return (
            <CarouselItem movie={movie} key={movie.id} />
          );
        })}
      </Flickity>
    </div>
  );
};

export default CarouselTwo;