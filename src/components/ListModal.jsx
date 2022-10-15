
const ListModal = () => {
  return (
    <>
        <div className="modal" id="my-modal-2">
          <div className="modal-box">

            <h3 className="text-lg font-bold uppercase pb-2">Add a new list</h3>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">List Name</span>
              </label>
              <input type="text" placeholder="Add a list name" className="input input-bordered w-full" />
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Add a description"></textarea>

              <div className="flex mt-4 justify-end">
                <div className="modal-action btn btn-primary px-6">
                  <a href="#">Save</a>
                </div>  
                <div className="modal-action btn btn-ghost ml-2">
                  <a href="#">Cancel</a>
                </div>  
              </div>

            </div>    
          </div>
        </div>
    </>
  )
}

export default ListModal