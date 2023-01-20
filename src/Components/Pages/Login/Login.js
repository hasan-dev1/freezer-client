import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContex } from "../../Others/AuthProvider/AuthProvider";
import ButtonSpinner from "../Spinner/ButtonSpinner";
const MySwal = withReactContent(Swal);

const Login = () => {
  const { login, withgoogle } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [turn, setturn] = useState(false);
  const [err, setErr] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    setturn(true);
    login(email, password)
      .then((res) => {
        setErr("");
        form.reset();
        MySwal.fire({
          title: <strong>Hellow {res?.user?.displayName}</strong>,
          html: <i>Hope you will be happy with our services</i>,
          icon: "success",
        });

        fetch(`https://freezer-server.vercel.app/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("freezerToken", data.token);
          })
          .catch((err) => console.log(err.message));

        setturn(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErr(err.message);
        setturn(false);
      });
  };

  const googleprovider = new GoogleAuthProvider();
  const handlegooglelogin = () => {
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
    <div className="bg-primary p-6">
      <div className="bg-secondary py-8 lg:w-1/3 mx-auto my-12 px-2 rounded h-[60vh] ">
        <h4 className="text-5xl mb-12 text-accent">Login</h4>
        <form onSubmit={handleLogin}>
          <div className="mx-12">
            <input
              className="input input-bordered bg-primary text-accent w-full mt-6 mb-1"
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
          <div className="text-start text-bold mx-12">
            <p className="text-red-600 my-1">{err}</p>
          </div>
          <div className="flex justify-between mx-12">
            <ButtonSpinner
              classess={"btn btn-primary w-full"}
              text={"Login"}
              handler={() => setturn(!turn)}
              action={turn}
            ></ButtonSpinner>
          </div>
          <p className="text-accent mt-6">
            New in Freezer?{" "}
            <Link className="text-amber-600" to={"/signup"}>
              SignUp
            </Link>
          </p>
        </form>
        <button
          onClick={handlegooglelogin}
          className="btn btn-accent text-primary w-1/2 mt-8"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
