import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log("Single Product:", product);
  return (
    <div>
      <p></p>
    </div>
  );
};

export default ProductDetails;
