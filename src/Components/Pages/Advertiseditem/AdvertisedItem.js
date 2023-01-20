import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";

const Advertiseditem = () => {
  const [advertiseditem, setAdvertisedItem] = useState();
  const { user } = useContext(AuthContex);
  useEffect(() => {
    fetch(
      `https://freezer-server.vercel.app/loadadvertiseproduct?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdvertisedItem(data));
  }, [user?.email]);
  const reminingproduct = advertiseditem?.filter(
    (item) => item?.status !== "sold"
  );

  const handleadvertise = (e) => {
    // console.log(e)
  };
  return (
    <div className="w-4/5 mx-auto my-12">
      <div className="flex justify-between text-xl font-bold ">
        <h3>Advertised product</h3>
      </div>
      <div className="mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full border-2 rounded">
            <thead>
              <tr>
                <th className=""></th>
                <th className="">Product image</th>
                <th className="">Product Name</th>
                <th className="">Resale Price</th>
                <th className="">Date</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>
              {advertiseditem?.length > 0 ? (
                reminingproduct?.map((item, idx) => (
                  <tr key={idx} className="border-t-2">
                    <th className="font-semibold">{idx + 1}</th>
                    <td className="font-semibold">
                      <img
                        className="w-12 h-12 rounded-full border-2"
                        src={item.productimage}
                        alt=""
                      />
                    </td>
                    <td className="font-semibold">{item.productname}</td>
                    <td className="font-semibold">${item.resaleprice}</td>
                    <td className="font-semibold">{item.postdate}</td>
                    <td className="font-semibold flex items-center border-0">
                      <button
                        onClick={() => handleadvertise(item._id)}
                        className=" bg-red-500 btn btn-sm text-white"
                      >
                        Running....
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Advertiseditem;
