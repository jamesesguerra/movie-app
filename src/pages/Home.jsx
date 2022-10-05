import React from 'react'

import MovieBanner from '../components/MovieBanner'
import Carousel from '../components/Carousel'
import CarouselTitle from '../components/CarouselTitle'

const Home = () => {
  return (
    <>
      <div className='mx-6'>
        <MovieBanner />
        <div>
          <CarouselTitle title={'Popular'} />
          <Carousel />

          <CarouselTitle title={'Now Showing'} />
          <Carousel />

          <CarouselTitle title={'Coming Soon'} />
          <Carousel />

          <CarouselTitle title={'Top-rated'} />
          <Carousel />
        </div>
      </div>
    </>
  )
}

export default Home