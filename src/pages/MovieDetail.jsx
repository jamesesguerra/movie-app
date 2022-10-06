import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import movieService from '../actions/movies';
import MovieBanner from '../components/MovieBanner'

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    movieService
      .getMovieDetail(movieId)
      .then(data => setMovieInfo(data))
  }, [])

  return (
    <div>
        <MovieBanner hideTxt={true} movieInfo={movieInfo} />
        <div className='mx-32'>
          <div className='flex gap-x-20'>
            <div className='hidden lg:block'>
              <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} className="rounded-lg" width={300} height={336} />
            </div>
            <div className='max-w-xl'>
              <h1 className='text-4xl font-bold font-serif pb-4'>
                {movieInfo.title}
                <span className='font-sans text-xl font-light pl-2'>{movieInfo.release_date}</span>
              </h1>
              <p className='uppercase pb-4'>{movieInfo.tagline}</p>
              <p>{movieInfo.overview}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieDetail