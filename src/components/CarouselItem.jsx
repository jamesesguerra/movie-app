import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ImagePlaceholder from "./ImagePlaceholder";


const CarouselItem = ({ movie }) => {

  return (
    <div className="carousel-item overflow-hidden pr-4" style={{ maxWidth: "14rem" }}>
      <Link to={`/movies/${movie.id}`}>
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="rounded-lg"
          width={200}
          height={300}
          placeholder={<ImagePlaceholder />}  
        />
      </Link>
    </div> 
  );
};

export default CarouselItem;