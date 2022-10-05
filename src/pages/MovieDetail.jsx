import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import movieService from '../actions/movies';
import MovieBanner from '../components/MovieBanner'

const MovieDetail = () => {
  const { movieId } = useParams();

  useEffect(() => {
    movieService
      .getMovieDetail(movieId)
      .then(data => console.log(data))
  }, [])

  return (
    <div className="mx-6">
        <MovieBanner />
        <h1>Movie {movieId}</h1>
    </div>
  )
}

export default MovieDetail