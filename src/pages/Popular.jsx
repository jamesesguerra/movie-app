import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import movieService from '../actions/movies';
import MovieCard from '../components/MovieCard';

const Popular = () => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    movieService
      .getPopularMovies(page)
      .then(data => {
        setMovies(data);
        console.log(data)
      })
  }, [page])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 mx-6 gap-4">
        {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    </>
  )
}

export default Popular