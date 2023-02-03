import { useState, useEffect } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { BottomScrollListener } from "react-bottom-scroll-listener";

import movieService from "../actions/movies";
import MovieCard from "../components/MovieCard";


const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const callback = () => {
    setPage(prevPage => prevPage + 1);

    movieService
      .getPopularMovies(page)
      .then(data => setMovies([...movies, ...data]));
  };

  const scrollRef = useBottomScrollListener(callback);

  useEffect(() => {
    movieService
      .getTopRated(page)
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className='mx-6 mt-16 text-3xl pb-8'>Top Rated</h1>
      <BottomScrollListener onBottom={callback} ref={scrollRef}>
        {(scrollRef) => (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-16 mx-6 gap-4" 
            ref={scrollRef}
          >
            {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        )}
      </BottomScrollListener>
    </div>
  );
};

export default TopRated;