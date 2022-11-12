import { LazyLoadImage } from "react-lazy-load-image-component";


const ListPreview = ({ movies }) => {
  return (
    <div className='flex relative min-h-[200px]'>
      {movies.slice(0, 4).map((movie, index) => {
        return (
          <LazyLoadImage 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="rounded-lg absolute"
            key={movie.id}
            style={{ left: index * 40 }}
            width={150}
            height={250}
          />
        );
      })}
    </div>
  );
};

export default ListPreview;
