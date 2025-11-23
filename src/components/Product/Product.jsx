import React from "react";

const Product = ({ product }) => {
  const { title, price_min, price_max, image } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm py-10">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title} </h2>
          <p>
            Price: ${price_min} - ${price_max}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
