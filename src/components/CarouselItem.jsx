import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CarouselItem = ({ movie }) => {
  console.log(movie)

  return (
        <div className="carousel-item overflow-hidden" style={{ maxWidth: '14rem' }}>
          <Link to={`/movies/${movie.id}`}>
            <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="rounded-lg" width={224} height={336} />
            </Link>
        </div> 
  )
}

export default CarouselItem