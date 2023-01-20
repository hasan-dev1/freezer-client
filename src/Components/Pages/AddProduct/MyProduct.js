import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContex);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://freezer-server.vercel.app/loadmyproduct?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user?.email, product]);

  let availableproduct = product?.filter((item) => item.status === "available");
  const soldproduct = product?.filter((item) => item.status === "sold");

  const handleDelete = (e) => {
    fetch(`https://freezer-server.vercel.app/loadmyproductdelete?id=${e}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleadvertise = (e) => {
    fetch(`https://freezer-server.vercel.app/advertiseupdate?id=${e}`, {
      method: "PUT",
      headers: {
        advertiseremail: user?.email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.matchedCount) {
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="m-12 h-[70vh] ">
      <div>
        <div className="flex justify-between text-xl font-bold ">
          <h3>Available product</h3>
        </div>
        <div className="mt-3">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-primary"></th>
                  <th className="bg-primary">Product Name</th>
                  <th className="bg-primary">Resale Price</th>
                  <th className="bg-primary">Date</th>
                  <th className="bg-primary">Action</th>
                </tr>
              </thead>
              <tbody>
                {availableproduct?.length > 0 ? (
                  availableproduct?.map((item, idx) => (
                    <tr key={idx} className="border-t-2">
                      <th className="font-semibold">{idx + 1}</th>
                      <td className="font-semibold">{item.productname}</td>
                      <td className="font-semibold">${item.resaleprice}</td>
                      <td className="font-semibold">{item.postdate}</td>
                      <td className="font-semibold flex items-center">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-sm btn-circle bg-red-500  text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        {item.advertiser ? (
                          <Link
                            to={"/advertisement"}
                            className="btn bg-green-600 btn-sm mx-2 text-white"
                          >
                            Manage advertisement
                          </Link>
                        ) : (
                          <button
                            onClick={() => handleadvertise(item._id)}
                            className="btn btn-error btn-sm mx-2 text-white"
                          >
                            Add advertise
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td></td>
                    <td></td>
                    <td> Product Not available</td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-between text-xl font-bold ">
          <h3>Solded product</h3>
        </div>
        <div className="mt-3">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-primary"></th>
                  <th className="bg-primary">Product Name</th>
                  <th className="bg-primary">Resale Price</th>
                  <th className="bg-primary">Date</th>
                  <th className="bg-primary">Action</th>
                </tr>
              </thead>
              <tbody>
                {soldproduct?.length > 0 ? (
                  soldproduct?.map((item, idx) => (
                    <tr key={idx} className="border-t-2">
                      <th className="font-semibold">{idx + 1}</th>
                      <td className="font-semibold">{item.productname}</td>
                      <td className="font-semibold">${item.resaleprice}</td>
                      <td className="font-semibold">{item.postdate}</td>
                      <td className="font-semibold">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-sm btn-circle bg-red-500  text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td></td>
                    <td></td>
                    <td> Product Not available</td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
