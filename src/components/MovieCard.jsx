import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

import ImagePlaceholder from "./ImagePlaceholder"


const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="rounded-lg"
        placeholder={<ImagePlaceholder />}  
      />
    </Link>
  )
}

export default MovieCard