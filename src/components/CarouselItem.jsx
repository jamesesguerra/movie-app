import { Link } from "react-router-dom"

const CarouselItem = () => {
  return (
        <div className="carousel-item overflow-hidden" style={{ maxWidth: '14rem' }}>
          <Link to={`/movies`}>
            <img src="https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg" className="rounded-lg" />
            </Link>
        </div> 
  )
}

export default CarouselItem