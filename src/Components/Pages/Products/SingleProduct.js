import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";
import ProductModal from "./ProductModal";
import { VerifyBadge } from "../../Others/VerifyBadge/VerifyBadge";
import useUserRole from "../../Others/useHooks/useHooks";
const MySwal = withReactContent(Swal);

const SingleProduct = () => {
  const { user } = useContext(AuthContex);
  const userdb = useUserRole(user?.email)[0];
  const [openproductmodal, setOpenproductmodal] = useState(null);
  const [buyerphonenumber, setBuyerphonenumber] = useState();
  const navigate = useNavigate();
  const singleproduct = useLoaderData();
  const {
    productname,
    productimage,
    location,
    resaleprice,
    originalprice,
    yearsofuse,
    postedtime,
    sellername,
    phonenumber,
    description,
    postdate,
  } = singleproduct[0];
  const greatingmodel = () => {
    MySwal.fire({
      title: <strong>Phone: {phonenumber}</strong>,
      html: (
        <i>
          Please contuct this number and meet: <strong>{location}</strong> with{" "}
          <strong>${resaleprice}</strong> doller{" "}
          <strong>Thanks for staying with freezer</strong>
        </i>
      ),
      icon: "success",
    });
  };

  const updatesoldedproduct = () => {
    const soldedproduct = {
      status: "sold",
      buyeremail: user?.email,
      buyerphonenumber,
    };

    fetch(
      `https://freezer-server.vercel.app/soldedproductupdate?id=${singleproduct[0]._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(soldedproduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate("/myorders/orderedproduct");
        }
      });
  };

  return (
    <div className="pt-16">
      <div className="bg-secondary w-2/4 mx-auto px-6 mb-12 p-6 rounded">
        <img
          className="px-5 mx-auto min-h-48 rounded-t-md"
          src={productimage}
          alt=""
        />
        <div className="text-start my-4 p-2 font-semibold">
          <div className="mt-12 flex justify-between ">
            <h4 className="text-3xl text-accent">
              Reseller Price: <span>${resaleprice}</span>
            </h4>
            <h4 className="text-3xl text-accent ">
              Market Price: ${originalprice}
            </h4>
          </div>
          <div className="my-3 text-accent">
            <p>Description</p>
            <h4>Total Use {yearsofuse}yr</h4>
            <h4>{description}</h4>
            <h4>Location: {location}</h4>
            <h4>Name: {productname}</h4>
            <h4>
              Posted Time: {postdate} at {postedtime}
            </h4>
            <h4 className="flex flex-row items-center">
              <span>Seller: {sellername} </span>
              {userdb?.uservarified === true ? <VerifyBadge></VerifyBadge> : ""}
            </h4>
          </div>
          <div className="text-center mt-12">
            <div className="grid lg:grid-cols-2 gap-2">
              <label
                htmlFor="productmodal"
                onClick={() => setOpenproductmodal("openmodal")}
                className="btn btn-primary w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="mx-2">Buy Now</span>
              </label>
              <button className="text-accent btn btn-primary w-full">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
                <span className="mx-2">Wishlist</span>
              </button>
            </div>
            {openproductmodal !== null ? (
              <ProductModal setOpenproductmodal={setOpenproductmodal}>
                <form>
                  <div className="mx-8 my-2">
                    <input
                      defaultValue={"Name: " + user?.displayName}
                      className="input input-bordered w-full"
                      type="text"
                    />
                  </div>
                  <div className="mx-8 my-2">
                    <input
                      defaultValue={"Email: " + user?.email}
                      className="input input-bordered w-full"
                      type="text"
                    />
                  </div>
                  <div className="mx-8 my-2">
                    <input
                      defaultValue={"Product Name: " + productname}
                      className="input input-bordered w-full"
                      type="text"
                    />
                  </div>
                  <div className="mx-8 my-2">
                    <input
                      defaultValue={"Reseler Price: $" + resaleprice}
                      className="input input-bordered w-full"
                      type="text"
                    />
                  </div>
                  <div className="mx-8 my-2">
                    <input
                      defaultValue={"Meet Location: " + location}
                      className="input input-bordered w-full"
                      type="text"
                    />
                  </div>
                  <div className="mx-8 my-2">
                    <input
                      required
                      onChange={(e) => setBuyerphonenumber(e.target.value)}
                      placeholder="Your Phone Number"
                      className="input input-bordered w-full"
                      type="number"
                    />
                  </div>
                  <label
                    htmlFor="greatingmodal"
                    className={`btn btn-primary px-12 mt-6`}
                    onClick={() => {
                      setOpenproductmodal(null);
                      greatingmodel();
                      updatesoldedproduct();
                    }}
                  >
                    Submit
                  </label>
                </form>
              </ProductModal>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
