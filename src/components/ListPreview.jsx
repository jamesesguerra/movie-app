import { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component"

import movieService from '../actions/movies';

const ListPreview = ({ movies }) => {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        movies.forEach((movie) => {
            movieService
                .getPoster(movie)
                .then(data => setPosters(prevState => [...prevState, data]))
        })
    }, [])

  return (
    <div className='flex relative min-h-[200px]'>
        {posters.map((poster_path, index) => {
            return (
                <LazyLoadImage 
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    className="rounded-lg absolute"
                    style={{ left: index * 40 }}
                    width={150}
                    height={250}
                />
            )
        })}
    </div>
  )
}

export default ListPreview