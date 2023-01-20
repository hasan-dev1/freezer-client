import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const SignUp = () => {
  const { user, createaccount, withgoogle, updatephoto } =
    useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [err, setErr] = useState("");
  const [turn, setturn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.files[0];
    const photokey = process.env.REACT_APP_IMAGE_URL_iamgebb;
    const email = form.email.value;
    const password = form.password.value;
    const formData = new FormData();
    formData.append("image", photo);
    const role = form.role.value;

    setturn(true);
    fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${photokey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photourl = data?.data?.url;
        createaccount(email, password)
          .then((result) => {
            updatephoto({ displayName: name, photoURL: photourl }).then(
              (result) => {
                fetch(`https://freezer-server.vercel.app/jwt?email=${email}`)
                  .then((res) => res.json())
                  .then((data) => {
                    localStorage.setItem("freezerToken", data.token);
                  })
                  .catch((err) => console.log(err.message));
                setturn(false);
                const saveUser = {
                  name,
                  photourl,
                  email,
                  userrole: role,
                  uservarified: false,
                };
                fetch(`https://freezer-server.vercel.app/user/add`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                });
                form.reset();
                navigate(from, { replace: true });
              }
            );
          })
          .catch((err) => {
            setturn(false);
            setErr(err.message);
          });
      })
      .catch((err) => {
        setturn(false);
        setErr(err.message);
      });
  };
  const googleprovider = new GoogleAuthProvider();
  const loginwithgoogle = () => {
    withgoogle(googleprovider).then((result) => {
      const { displayName, photoURL, email } = result.user;
      const saveUser = {
        name: displayName,
        photourl: photoURL,
        email: email,
        userrole: "buyer",
        uservarified: false,
      };
      fetch(`https://freezer-server.vercel.app/user/add`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      }).catch((err) => setErr(err.message));

      navigate(from, { replace: true });
    });
  };
  return (
    <div className="bg-secondary p-6 lg:w-1/3 mx-auto my-12 px-2 rounded h-[60vh] ">
      <h4 className="text-5xl mb-12 text-accent">Sign Up</h4>
      <form onSubmit={handleLogin}>
        <div className="mx-12">
          <input
            className="input input-bordered bg-primary text-accent w-full my-1"
            placeholder="Your Name"
            type="text"
            name="name"
          />
        </div>
        <div className="mx-12">
          <input
            className=" p-3 rounded-lg bg-primary text-accent w-full my-1"
            placeholder="Your Photo"
            type="file"
            name="photo"
          />
        </div>
        <div className="mx-12">
          <input
            className="input input-bordered bg-primary text-accent w-full my-1"
            placeholder="Your Email"
            type="email"
            name="email"
          />
        </div>
        <div className="mx-12">
          <input
            className="input input-bordered bg-primary text-accent w-full my-1"
            placeholder="Your Password"
            type="password"
            name="password"
          />
        </div>
        <div className="mx-12">
          <select
            name="role"
            className="select w-full my-1 bg-primary text-accent"
          >
            <option disabled>Pick your favorite Simpson</option>
            <option defaultValue={"buyer"}>buyer</option>
            <option>seller</option>
          </select>
        </div>
        <div className="text-start text-bold mx-12">
          <p className="text-red-600 my-1">{err}</p>
        </div>
        <ButtonSpinner
          text={"SignUp"}
          handler={() => setturn(!turn)}
          action={turn}
        ></ButtonSpinner>
        <p className="text-accent">
          Already have ac accoutn{" "}
          <Link className="text-last" to={"/login"}>
            Login
          </Link>
        </p>
      </form>

      <div>
        <button onClick={loginwithgoogle} className="text-accent">
          Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
