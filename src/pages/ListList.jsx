import { useState, useEffect } from "react";

import ListItem from "../components/ListItem";
import ListModal from "../components/ListModal";
import listService from "../actions/lists";

// const lists = [{name: "Favorites", description: "A list of your favorite movies.", count: 0, movies: [718930, 2900, 760161, 1900]}, {name: "Another list", description: "hahaha", count: 5, movies: [2928]}];

const ListList = ({ user }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    listService
      .getAll(user.id)
      .then(data => setLists(data));

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mx-6 pt-8'>
      <div className="flex justify-between">
        <h1 className='text-4xl py-4 font-bold'>All Lists</h1>
        <div className="flex content-end">
          <a href="#my-modal-2" className="btn btn-sm mt-5">Add a list</a>
        </div>
      </div>
      <hr className="my-2 h-px bg-slate-500 border-0" />

      <div>
        {lists.map((list) => <ListItem listInfo={list} key={list.name} />)}
      </div>

      <ListModal />
    </div>
  );
};

export default ListList;