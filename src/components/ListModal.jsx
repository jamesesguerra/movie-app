import React from 'react'

const ListModal = () => {
  return (
    <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" for="">
                <h3 className="text-lg font-bold">Add a new list</h3>
            </label>
        </label>
    </>
  )
}

export default ListModal