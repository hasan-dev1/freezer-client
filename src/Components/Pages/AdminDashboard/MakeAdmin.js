import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [allusre, setAlluser] = useState([]);

  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/alluserformakeadmin`, {
      method: "GET",
      headers: {
        freezertoken: `bearer ${localStorage.getItem("freezerToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAlluser(data))
      .catch((err) => console.log(err.message));
  }, []);

  const handlemakeadmin = (e) => {
    const userinfo = allusre.find((item) => item._id === e);
    if (userinfo?.userrole === "admin") {
      fetch(`https://freezer-server.vercel.app/alluserformakeadmin?id=${e}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userrole: "buyer" }),
      })
        .then((res) => res.json())
        .then((data) => setAlluser(data))
        .catch((err) => console.log(err.message));
    } else {
      fetch(`https://freezer-server.vercel.app/alluserformakeadmin?id=${e}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userrole: "admin" }),
      })
        .then((res) => res.json())
        .then((data) => setAlluser(data))
        .catch((err) => console.log(err.message));
    }
  };

  const handleVerify = (e) => {
    const verify = allusre.find((item) => item._id === e);
    if (verify.uservarified === true) {
      fetch(`https://freezer-server.vercel.app/uservarified?id=${e}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uservarified: false }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAlluser(data);
        })
        .catch((err) => console.log(err.message));
    } else {
      fetch(`https://freezer-server.vercel.app/uservarified?id=${e}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uservarified: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAlluser(data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div className="overflow-x-auto p-12">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="bg-accent text-primary"></th>
            <th className="bg-accent text-primary">Image</th>
            <th className="bg-accent text-primary">Name</th>
            <th className="bg-accent text-primary">Email</th>
            <th className="bg-accent text-primary">Role</th>
            <th className="bg-accent text-primary">Action</th>
          </tr>
        </thead>
        <tbody>
          {allusre ? (
            allusre?.map((item, idx) => (
              <tr key={idx}>
                <th className="bg-primary text-accent font-bold">{idx + 1}</th>
                <td className="bg-primary text-accent font-bold">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={item?.photourl}
                    alt=""
                  />
                </td>
                <td className="bg-primary text-accent font-bold">
                  {item.name}
                </td>
                <td className="bg-primary text-accent font-bold">
                  {item.email}
                </td>
                <td className="bg-primary text-accent font-bold">
                  {item.userrole}
                </td>
                <td className="bg-primary text-accent font-bold">
                  {item?.userrole !== "admin" ? (
                    <button
                      onClick={() => handlemakeadmin(item._id)}
                      className="btn btn-sm btn-accent px-6  text-"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handlemakeadmin(item._id)}
                      className="btn btn-sm btn-error"
                    >
                      Remove Admin
                    </button>
                  )}

                  {item?.uservarified ? (
                    <span
                      onClick={() => handleVerify(item._id)}
                      className="btn btn-error btn-sm mx-1"
                    >
                      Remove varify
                    </span>
                  ) : (
                    <span
                      onClick={() => handleVerify(item._id)}
                      className="btn btn-accent btn-sm mx-1"
                    >
                      verify
                    </span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <span>Check yout token expiration time</span>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
