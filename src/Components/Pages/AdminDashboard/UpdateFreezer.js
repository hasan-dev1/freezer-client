import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { useQuery } from "@tanstack/react-query";
const MySwal = withReactContent(Swal);

const UpdateFreezer = () => {
  const [oldcategory, setOldcategory] = useState();
  const { data } = useQuery({
    queryKey: ["getcategory"],
    queryFn: async () => {
      const res = await fetch(`https://freezer-server.vercel.app/getcategory`);
      const data = await res.json();
      data.forEach((item) => {
        const id = Math.max(item.categoryitemid);
        setOldcategory(id);
      });
      return data;
    },
  });

  // useEffect(() => {
  //   fetch(`https://freezer-server.vercel.app/getcategory`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.forEach((item) => {
  //         const id = Math.max(item.categoryitemid);
  //         setOldcategory(id);
  //       });
  //     })
  //     .catch((err) => console.log(err.message));
  // }, [oldcategory]);

  const handlecategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const categoriesname = form.categoryname.value;

    fetch(`https://freezer-server.vercel.app/addcategory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ categoriesname, categoryitemid: oldcategory + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          MySwal.fire({
            title: <strong>Category Updated Successfully!</strong>,
            html: <i></i>,
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div>
        <form onSubmit={handlecategory} className="p-8">
          <div className="my-4">
            <p className="text-xl text-start my-3 ml-2" htmlFor="Category Name">
              Category Name
            </p>
            <input
              name="categoryname"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
          <button className="w-full btn btn-primary ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFreezer;
