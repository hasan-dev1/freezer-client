import React, { useEffect, useState } from "react";

const AllBuyers = () => {
  const [sellers, setSellers] = useState();
  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/accountstatus/${"buyers"}`)
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);

  const handledeletebuyer = (e) => {
    fetch(`https://freezer-server.vercel.app/deleteuseraccess?id=${e?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remine = sellers.filter((item) => item._id !== e._id);
        setSellers(remine);
      });
  };
  return (
    <div className="p-6">
      <h4 className="text-3xl text-start my-3">All Buyers</h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verifyd</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    className="w-12 h-12 rounded-full border-2"
                    src={item.photourl}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  {item.uservarified ? "Varified User" : "User Not Verified"}
                </td>
                <td>
                  <button
                    onClick={() => handledeletebuyer(item)}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
