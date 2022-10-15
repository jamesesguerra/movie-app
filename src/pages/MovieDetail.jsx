import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import movieService from '../actions/movies';
import Carousel from '../components/Carousel';
import MovieBanner from '../components/MovieBanner'
import Pill from '../components/Pill';
import { minsToHrsAndMins } from '../utils/time';


const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [genres, setGenres] = useState();
  const [openTab, setOpenTab] = useState(1);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieService
      .getMovieDetail(movieId)
      .then(data => setMovieInfo(data))

    movieService
      .getCast(movieId)
      .then(data => setCast(data))

    window.scrollTo(0, 0)
  }, [movieId])

  useEffect(() => {
    if (Object.keys(movieInfo).length !== 0) {
      setGenres(movieInfo.genres.slice(0, 2).map((genre) => genre.name).join(', '));
    }
  }, [movieInfo])

  return (
    <div>
        <MovieBanner hideTxt={true} movieInfo={movieInfo} />
        {Object.keys(movieInfo).length !== 0 && (
          <div className='mx-6 lg:mx-32 min-h-[550px]'>
              <div className='flex gap-x-20'>

                <div className='hidden xl:block'>
                  <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} className="rounded-lg" width={300} height={336} />
                </div>

                <div className='lg:max-w-2xl'>
                  <h1 className='text-4xl font-bold font-serif pb-4'>
                    {movieInfo.title}
                    <span className='font-sans text-xl font-light pl-2'>{new Date(movieInfo.release_date).getUTCFullYear()}</span>
                  </h1>
                  <p className='uppercase pb-4'>{movieInfo.tagline}</p>
                  <p className='pb-8'>{movieInfo.overview}</p>
                  

                  <div className="tabs tabs-boxed">
                    <a className={`tab  ${openTab === 1 ? "tab-active": ""}`} onClick={() => setOpenTab(1)}>Overview</a> 
                    <a className={`tab  ${openTab === 2 ? "tab-active": ""}`} onClick={() => setOpenTab(2)}>Cast</a> 
                  </div>

                  <div className={`${openTab === 1 ? "block": "hidden"} overflow-x-auto`}>
                    <table className="table w-full">
                      <tbody>
                        <tr>
                          <td>Runtime</td>
                          <td>{minsToHrsAndMins(movieInfo.runtime)}</td>
                        </tr>
                        <tr>
                          <td>Genres</td>
                          <td>{genres}</td>
                        </tr>
                        <tr>
                          <td>Rating</td>
                          <td>{movieInfo.vote_average}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className={`${openTab === 2 ? "block": "hidden"} pt-4`}>
                    {cast.slice(0, 15).map((member) => <Pill label={member.original_name} />)}
                  </div>
                </div>
              </div>
          </div>
        )}
      
        <div className='ml-6 md:mx-6 lg:mx-32'>
          <h2 className='text-2xl py-4'>Similar Movies</h2>
          <Carousel section={'similar'} movieId={movieId} /> 
        </div>

    </div>
  )
}

export default MovieDetail