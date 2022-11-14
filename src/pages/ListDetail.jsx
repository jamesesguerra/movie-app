import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EditListModal from "../components/EditListModal";
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
    <div className="min-h-[700px]">
      {list && (
        <div className="mx-auto max-w-6xl px-6 lg:px-0">
          <div className="flex justify-between">
            <div>
              <h1 className="mt-16 text-3xl pb-4 font-bold">{list.name}</h1>
              <h2 className="text-xl pb-16">{list.description}</h2>
            </div>
            <div className="flex content-end mt-16">
              <EditListModal />
            </div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-16 gap-4"
          >
            {list.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListDetail;