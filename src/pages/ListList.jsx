import React from 'react'

import ListItem from '../components/ListItem'
import ListModal from '../components/ListModal'

const lists = [{name: 'Favorites', description: 'a list', count: 0}, {name: 'favorites', description: "hahaha", count: 5}]

const ListList = () => {
  return (
    <div className='mx-6 pt-8'>
      <div className="flex justify-between">
        <h1 className='text-4xl py-4 font-bold'>All Lists</h1>
        <div className="flex content-end">
          <label htmlFor="my-modal-4" className='btn btn-sm mt-5 modal-button'>Add a new list</label>
        </div>
      </div>
      <hr className="my-2 h-px bg-slate-500 border-0" />

      {lists.map((list) => <ListItem listInfo={list} />)}
      <ListModal />
    </div>
  )
}

export default ListList