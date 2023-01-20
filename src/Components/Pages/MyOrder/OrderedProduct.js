import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";

const OrderedProduct = () => {
  const { user } = useContext(AuthContex);
  const [buyerproduct, setBuyerproduct] = useState();

  useEffect(() => {
    fetch(
      `https://freezer-server.vercel.app/loadsoldedproduct?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBuyerproduct(data));
  }, [user?.email]);

  return (
    <div className="m-16">
      <h3 className="text-start text-3xl mb-3">Ordered Product</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-accent text-primary"></th>
              <th className="bg-accent text-primary">Image</th>
              <th className="bg-accent text-primary">Title</th>
              <th className="bg-accent text-primary">Price</th>
              <th className="bg-accent text-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {buyerproduct?.map((item, idx) => (
              <tr key={idx} className="border-t-2 border-secondary">
                <th className="bg-primary ">{idx + 1}</th>
                <td className="bg-primary ">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={item.productimage}
                    alt=""
                  />
                </td>
                <td className="bg-primary ">{item.productname}</td>
                <td className="bg-primary ">item.resalerprice</td>
                <td className="bg-primary ">
                  <Link
                    to={"/myorders/payment/card"}
                    className="btn btn-secondary btn-sm hover:bg-slate-600"
                  >
                    Pay
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderedProduct;
