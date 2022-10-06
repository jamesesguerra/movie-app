import React from 'react'

const MovieBanner = ({ hideTxt, movieInfo }) => {

  return (
    <div
        className='bg-cover text-white bg-cover bg-center mb-10'
        style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(101, 101, 101, .5), rgba(255, 255, 255, 0)), url('https://image.tmdb.org/t/p/w1280/${movieInfo.backdrop_path}')`,
        height: 500
        }}
    >
      {!hideTxt && (
        <div className='max-w-sm px-4 pt-80'>
            <h2 className='text-3xl pb-2 font-bold'>{movieInfo.title}</h2>
            <p className='text-xs'>{movieInfo.overview}</p>
        </div>
      )}
    </div>
  )
}

export default MovieBanner