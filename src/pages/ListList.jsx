import React from 'react'

import ListItem from '../components/ListItem'
import ListModal from '../components/ListModal'

const lists = [{name: 'Favorites', description: 'A list of your favorite movies.', count: 0, movies: [718930, 2900, 760161, 1900]}, {name: 'Another list', description: "hahaha", count: 5, movies: [2928]}]

const ListList = () => {
  return (
    <div className='mx-6 pt-8'>
      <div className="flex justify-between">
        <h1 className='text-4xl py-4 font-bold'>All Lists</h1>
        <div className="flex content-end">
          {/* <label htmlFor="my-modal-4" className='btn btn-sm mt-5 modal-button'>Add a list</label> */}
          <a href="#my-modal-2" className="btn btn-sm mt-5">Add a list</a>
        </div>
      </div>
      <hr className="my-2 h-px bg-slate-500 border-0" />

      <div>
        {lists.map((list) => <ListItem listInfo={list} />)}
      </div>

      <ListModal />
    </div>
  )
}

export default ListList