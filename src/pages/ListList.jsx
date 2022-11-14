import { useState, useEffect } from "react";

import AddListModal from "../components/AddListModal";
import ListItem from "../components/ListItem";
import listService from "../actions/lists";


const ListList = ({ user }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    listService
      .getAll(user.id)
      .then(data => setLists(data));

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mx-auto pt-8 min-h-[800px] max-w-6xl px-6 lg:px-0'>
      <div className="flex justify-between">
        <h1 className='text-4xl py-4 font-bold'>All Lists</h1>
        <div className="flex content-end">
          <a href="#add-list" className="btn btn-sm mt-5">Add a list</a>
        </div>
      </div>
      <hr className="my-2 h-px bg-slate-500 border-0" />

      <div>
        {lists.map((list) => <ListItem listInfo={list} key={list.name} />)}
      </div>

      <AddListModal />
    </div>
  );
};

export default ListList;