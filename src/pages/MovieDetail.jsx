import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import movieService from '../actions/movies';
import MovieBanner from '../components/MovieBanner'
import { minsToHrsAndMins } from '../utils/time';
import { getNumberWithCommas } from '../utils/currency';

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
        <div className='mx-6 lg:mx-32'>
          <div className='flex gap-x-20'>

            <div className='hidden lg:block'>
              <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} className="rounded-lg" width={300} height={336} />
            </div>

            <div className='lg:max-w-2xl'>
              <h1 className='text-4xl font-bold font-serif pb-4'>
                {movieInfo.title}
                <span className='font-sans text-xl font-light pl-2'>{new Date(movieInfo.release_date).getUTCFullYear()}</span>
              </h1>
              <p className='uppercase pb-4'>{movieInfo.tagline}</p>
              <p className='pb-10'>{movieInfo.overview}</p>

              <div className="overflow-x-auto">
                <table className="table w-full">
                  <tbody>
                    <tr>
                      <td>Runtime</td>
                      <td>{minsToHrsAndMins(movieInfo.runtime)}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{movieInfo.status}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>{movieInfo.vote_average}</td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>${getNumberWithCommas(movieInfo.revenue)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieDetail