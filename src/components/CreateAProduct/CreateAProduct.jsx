import React from "react";

const CreateAProduct = () => {
  return (
    <div>
      <form>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="title" className="input w-full " />
          {/* email */}
          <label className="label">Image Url </label>
          <input type="text" name="image" className="input w-full" />
          {/* bid amount   */}
          <label className="label">Min Price</label>
          <input
            type="text"
            className="input w-full"
            name="price_min"
            placeholder="Minimum Price"
          />
          <label className="label">Max Price</label>
          <input
            type="text"
            className="input w-full"
            name="price_min"
            placeholder="Maximum Price"
          />

          <button className="btn btn-neutral mt-4">Add a product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
