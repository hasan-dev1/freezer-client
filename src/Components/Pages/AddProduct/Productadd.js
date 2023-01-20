import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";
import useUserRole from "../../Others/useHooks/useHooks";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const Productadd = () => {
  const MySwal = withReactContent(Swal);
  const { user } = useContext(AuthContex);
  const [uploadproduct, setUploadproduct] = useState(false);
  const navigate = useNavigate();
  const [categoriesitem, setCategoriesItem] = useState();
  const productphotokey = process.env.REACT_APP_IMAGE_URL_iamgebb;
  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/getcategory`)
      .then((res) => res.json())
      .then((data) => {
        setCategoriesItem(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleaddproductform = (e) => {
    e.preventDefault();
    const form = e.target;

    const sellername = user?.displayName;
    const selleremail = user?.email;
    const resaleprice = form.reselerprice.value;
    const originalprice = form.originalprice.value;
    const phonenumber = form.phonenumber.value;
    const location = form.location.value;
    const yearsofuse = form.yearsofuse.value;
    const categoryname = form.selectcategory.value;
    const findcatID = categoriesitem.find(
      (item) => item.categoriesname === categoryname
    );
    const categoryid = findcatID.categoryitemid;
    const productname = form.productname.value;
    const condition = form.condition.value;
    const description = form.description.value;
    const postdate = new Date().toLocaleDateString();
    const postedtime = new Date().toLocaleTimeString();
    const status = "available";

    const photo = form.productimage.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    //iamge upload
    setUploadproduct(true);
    fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${productphotokey}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const productforUpload = {
          productimage: data.data.url,
          sellername,
          resaleprice,
          originalprice,
          phonenumber,
          location,
          status,
          selleremail,
          categoryname,
          categoryid,
          productname,
          yearsofuse,
          condition,
          description,
          postdate,
          postedtime,
        };

        fetch(`https://freezer-server.vercel.app/frreezerproduct`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productforUpload),
        })
          .then((res) => res.json())
          .then((data) => {
            setUploadproduct(false);
            MySwal.fire({
              title: <strong>Product Added Successfully</strong>,
              html: <i></i>,
              icon: "success",
            });
            navigate("/buyerdashboard/myproduct");
          })
          .catch((err) => {
            console.log(err.message);
            setUploadproduct(false);
          });
      })
      .catch((err) => {
        setUploadproduct(false);
        console.log(err.message);
      });
  };

  return (
    <div className="bg-primary m-3 rounded ">
      <h4 className="text-start pt-4 ml-3 text-4xl md:text-center lg:text-start">
        Add Product
      </h4>
      <form
        onSubmit={handleaddproductform}
        className="text-start p-4 lg:w-1/2 md:w-1/2 lg:ml-0 md:mx-auto"
      >
        <div className="flex flex-col lg:flex-row">
          <input
            placeholder="Reseler Price"
            name="reselerprice"
            className="input input-bordered w-full my-3"
            type="number"
          />
          <input
            placeholder="Original Price"
            name="originalprice"
            className="input input-bordered w-full my-3 lg:ml-1"
            type="number"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <input
            placeholder="Phone Number"
            name="phonenumber"
            className="input input-bordered w-full my-3"
            type="number"
          />
          <input
            placeholder="Location"
            name="location"
            className="input input-bordered w-full my-3 lg:ml-1"
            type="text"
          />
        </div>
        <div></div>
        <div className="flex flex-col lg:flex-row">
          <input
            placeholder="Year of Use"
            name="yearsofuse"
            className="input input-bordered w-full my-3 "
            type="text"
          />
          <select
            name="selectcategory"
            className="input input-bordered w-full lg:ml-1 my-3"
          >
            <option disabled>Select a category Item</option>
            {categoriesitem?.map((item, idx) => (
              <option key={idx}>{item.categoriesname}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            placeholder="Product Name"
            name="productname"
            className="input input-bordered w-full my-3"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Product image">Product image</label>
          <input
            name="productimage"
            className="file-input file-input-accent w-full my-3"
            type="file"
          />
        </div>
        <div>
          <input
            placeholder="Condition"
            name="condition"
            className="input input-bordered w-full my-3"
            type="text"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            name="description"
            className="input input-bordered p-3 w-full my-3 h-24"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div></div>

        <ButtonSpinner
          classess={"btn btn-secondary w-full"}
          text={"Add Product"}
          action={uploadproduct}
        ></ButtonSpinner>
      </form>
    </div>
  );
};

export default Productadd;
