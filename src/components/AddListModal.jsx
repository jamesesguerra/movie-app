import { useFormik } from "formik";
import * as Yup from "yup";

import listService from "../actions/lists";


const ListModal = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required")
    }),
    onSubmit: async(values) => {
      try {
        const newList = await listService.create(values);
        console.log(newList);
      } catch (err) {
        console.error(err);
      }
    }
  });

  return (
    <>
      <div className="modal" id="add-list">
        <div className="modal-box">

          <h3 className="text-lg font-bold uppercase pb-2">Add a new list</h3>
          <form className="form-control w-full" onSubmit={formik.handleSubmit}>
            <label className="label">
              <span className="label-text">List Name</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Add a list name"
              className="input input-bordered w-full"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="pt-2 text-xs text-rose-500">{formik.errors.name}</p>
            ) : null}
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered"
              placeholder="Add a description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>

            <div className="flex mt-4 justify-end">
              <div className="modal-action btn btn-primary px-6">
                <button type="submit">Save</button>
              </div>  
              <div className="modal-action btn btn-ghost ml-2">
                <a href="#">Cancel</a>
              </div>  
            </div>

          </form>    
        </div>
      </div>
    </>
  );
};

export default ListModal;
