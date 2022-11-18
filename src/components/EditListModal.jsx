const EditListModal = () => {
  return (
    <>
      <label htmlFor="my-modal-6" className="btn btn-sm">Edit List</label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom">
        <div className="modal-box min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-bold text-3xl">Edit List</h1>
            <div className="divider"></div> 
            <form className="form-control w-full">
              <label className="label">
                <span className="label-text">List Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Add a list name"
                className="input input-bordered w-full"
              />
              <label className="label pt-8">
                <span className="label-text">Description</span>
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered"
                placeholder="Add a description"
              ></textarea>
            </form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add a Film</span>
              </label>
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Save</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditListModal;