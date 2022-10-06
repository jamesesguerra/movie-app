import React from 'react'

import MovieBanner from '../components/MovieBanner'
import Carousel from '../components/Carousel'
import CarouselTitle from '../components/CarouselTitle'

const Home = () => {
  return (
    <>
      <div>
        <MovieBanner />
        <div className='ml-6'>
          <CarouselTitle title={'Popular'} />
          <Carousel section={'popular'} />

          <CarouselTitle title={'Now Showing'} />
          <Carousel section={'now_playing'} />

          <CarouselTitle title={'Coming Soon'} />
          <Carousel section={'upcoming'} />

          <CarouselTitle title={'Top-rated'} />
          <Carousel section={'top_rated'} />
        </div>
      </div>
    </>
  )
}

export default Home