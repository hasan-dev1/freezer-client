import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCart from "../Products/ProductCart";

const CategoriesDetails = ({ category, quantity = null }) => {
  const [frreezerProduct, setFreezerProduct] = useState([]);
  const [freezercategories, setFreezercategories] = useState([]);

  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/frreezerproduct?id=${category}`)
      .then((res) => res.json())
      .then((data) => {
        quantity
          ? setFreezerProduct(data.slice(0, 3))
          : setFreezerProduct(data);
        setFreezercategories(data[0].categoryname);
      });
  }, [category, quantity]);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-accent ">{freezercategories}</h3>
        <Link
          to={`/productsdetails/${category}`}
          className="text-2xl font-bold text-accent"
        >
          See All
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-3 mb-12 bg-primary">
        {frreezerProduct ? (
          frreezerProduct?.map((categoryproduct, idx) => (
            <ProductCart
              key={idx}
              productcategory={categoryproduct}
            ></ProductCart>
          ))
        ) : (
          <span className="text-accent">Item Not found</span>
        )}
      </div>
    </div>
  );
};

export default CategoriesDetails;
