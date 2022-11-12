const EditListModal = () => {
  return (
    <>
      <label htmlFor="my-modal-6" className="btn btn-sm">Edit List</label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom">
        <div className="modal-box min-h-screen">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditListModal;