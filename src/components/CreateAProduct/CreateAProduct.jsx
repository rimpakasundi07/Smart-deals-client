import React from "react";

const CreateAProduct = () => {
  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;

    console.log(title, image, price_min, price_max);
  };
  return (
    <div className="w-10/12 mx-auto lg:py-15 ">
      <form onSubmit={handleCreateAProduct}>
        <fieldset className="fieldset">
          <label className="label lg:ml-44 ">Name</label>
          <input type="text" name="title" className="input w-8/12 mx-auto " />
          {/* email */}
          <label className="label lg:ml-44 ">Image Url </label>
          <input type="text" name="image" className="input w-8/12 mx-auto" />
          {/* bid amount */}
          <label className="label lg:ml-44 ">Min Price</label>
          <input
            type="text"
            className="input w-8/12 mx-auto"
            name="price_min"
            placeholder="Minimum Price"
          />
          <label className="label lg:ml-44 ">Max Price</label>
          <input
            type="text"
            className="input w-8/12 mx-auto"
            name="price_max"
            placeholder="Maximum Price"
          />

          <button className="btn text-white bg-gradient-to-br from-[#4B0082] to-[#9400D3] w-8/12 mx-auto mt-4">
            Add a product
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
