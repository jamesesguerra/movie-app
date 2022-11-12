import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import listService from "../actions/lists";


const ListDetail = () => {
  const { listId } = useParams();
  const [list, setList] = useState();

  useEffect(() => {
    listService
      .getOne(listId)
      .then(data => setList(data));
  }, []);

  return (
    <>
      {list && (
        <>
          <h1 className="mx-6 mt-16 text-3xl pb-4 font-bold">{list.name}</h1>
          <h2 className="mx-6 text-xl pb-16">{list.description}</h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-16 mx-6 gap-4"
          >
            {list.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </>
      )}
    </>
  );
};

export default ListDetail;