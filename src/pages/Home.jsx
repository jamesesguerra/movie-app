import React from 'react'
import Carousel from '../components/Carousel'
import CarouselTitle from '../components/CarouselTitle'

const Home = () => {
  return (
    <>
      <div className='mx-6'>
        <div
          className='rounded-lg bg-cover text-white bg-cover bg-center my-10'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(101, 101, 101, .5), rgba(255, 255, 255, 0)), url('https://image.tmdb.org/t/p/w1280/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg')`,
            height: 500
          }}
        >
          <div className='max-w-sm pl-4 pt-80'>
            <h2 className='text-2xl pb-2'>Bullet Train</h2>
            <p className='text-xs'>Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.</p>
          </div>
        </div>

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