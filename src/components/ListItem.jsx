import React from 'react'

const ListItem = ({ listInfo }) => {
  return (
    <div>

        <div className='flex justify-between'>
            <h1 className='text-3xl py-4 font-bold uppercase'>{listInfo.name}</h1>
            <span className='font-light text-base px-2 mt-6'>{listInfo.count} films</span>   
        </div>
        <p className='text-lg'>{listInfo.description}</p>
        <div className="divider"></div>
    </div>
  )
}

export default ListItem