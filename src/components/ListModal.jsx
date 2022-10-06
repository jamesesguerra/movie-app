import React from 'react'

const ListModal = () => {
  return (
    <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" for="">
                <h3 className="text-lg font-bold">Add a new list</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </label>
        </label>
    </>
  )
}

export default ListModal