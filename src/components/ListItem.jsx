import { Link } from "react-router-dom";

import ListPreview from "./ListPreview";

const ListItem = ({ listInfo }) => {
  return (
    <div>
      <Link to={`/lists/${listInfo.id}`}>
        <div className='flex justify-between'>
          <h1 className='text-2xl py-4 font-bold uppercase'>{listInfo.name}</h1>
          <span className='font-light text-base px-2 mt-6'>{listInfo.movies.length} films</span>   
        </div>
        <ListPreview movies={listInfo.movies} />
        <p className='text-lg pt-10'>{listInfo.description}</p>
      </Link>
      <div className="divider"></div>
    </div>
  );
};

export default ListItem;