import { Link } from "react-router-dom"

const CarouselItem = () => {
  return (
        <div className="carousel-item overflow-hidden" style={{ maxWidth: '14rem' }}>
          <Link to={`/movies/${718930}`}>
            <img src="https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg" className="rounded-lg" />
            </Link>
        </div> 
  )
}

export default CarouselItem