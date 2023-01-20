import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ productcategory }) => {
  const {
    productname,
    productimage,
    location,
    resaleprice,
    originalprice,
    yearsofuse,
    postedtime,
    sellername,
    _id
  } = productcategory;
  return (
    <div className="bg-secondary p-6 rounded">
      <img
        className="w-full px-5 lg:h-[15rem] min-h-48 rounded-lg"
        src={productimage}
        alt=""
      />
      <div className="text-start text-accent min-h-[140px] font-semibold">
        <div className="flex justify-between mb-1 mt-6">
          <h5>Seller: {sellername}</h5>
          <h5>Posted {postedtime}</h5>
        </div>
        <div className="flex justify-between my-1">
          <h5>Product : {productname}</h5>
          <h5>{location}</h5>
        </div>
        <div>
          <p>Total use: {yearsofuse}yr</p>
        </div>
        <div className="flex justify-between my-1">
          <h5>
            Reseler Price $<span className="text-xl">{resaleprice}</span>{" "}
          </h5>
          <h5>
            Original price $<span className="text-xl">{originalprice}</span>{" "}
          </h5>
        </div>
      </div>
      <Link
        to={`/productsdetails/single/${_id}`}
        className="btn btn-primary w-full mt-6"
      >
        Details
      </Link>
    </div>
  );
};

export default ProductCart;
