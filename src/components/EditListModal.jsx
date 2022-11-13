const EditListModal = () => {
  return (
    <>
      <label htmlFor="my-modal-6" className="btn btn-sm">Edit List</label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom">
        <div className="modal-box min-h-screen">
          <div className="w-[72rem] mx-auto">
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
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Yay!</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditListModal;