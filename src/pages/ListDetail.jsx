import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import listService from "../actions/lists";


const ListDetail = () => {
  const { listId } = useParams();
  const [list, setList] = useState({});

  useEffect(() => {
    listService
      .getOne(listId)
      .then(data => setList(data));
  }, []);

  return (
    <>
      <h1>{list.name}</h1>
      <h2>{list.description}</h2>
      <div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-16 mx-6 gap-4"
      >
        {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    </>
  );
};

export default ListDetail;