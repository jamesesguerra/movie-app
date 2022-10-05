import { Link } from "react-router-dom"

const CarouselItem = () => {
  return (
    <Link to={`/movies`} className='carousel-item overflow-hidden'>
        <div className="carousel-item">
            <img src="https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg" className="rounded-lg hover:scale-105 duration-200 ease-in" />
        </div> 
    </Link>
  )
}

export default CarouselItem