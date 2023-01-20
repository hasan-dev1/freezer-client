import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../../Others/AuthProvider/AuthProvider";
import useUserRole from "../../../Others/useHooks/useHooks";
import "./nav.css";

const ScondNav = () => {
  const { user, logout } = useContext(AuthContex);
  const checkrole = useUserRole(user?.email);
  const [advertiseditem, setAdvertisedItem] = useState();
  const [theme, setTheme] = useState(localStorage.getItem("freezermode"));

  useEffect(() => {
    axios
      .get(
        `https://freezer-server.vercel.app/loadadvertiseproduct?email=${user?.email}`
      )
      .then((data) => setAdvertisedItem(data.data));
  }, [user?.email]);

  const { data } = useQuery({
    queryKey: ["loadcategories"],
    queryFn: async () =>
      fetch(`https://freezer-server.vercel.app/getcategory`).then((res) =>
        res.json()
      ),
  });
  //   <li key={1}>
  //     <NavLink
  //       to={"/"}
  //       className={({ isActive }) =>
  //         isActive
  //           ? "bg-accent text-primary px-3 py-2 rounded m-1"
  //           : "bg-secondary text-accent px-3 py-2 rounded m-1"
  //       }
  //     >
  //       Home
  //     </NavLink>
  //   </li>,
  //   <li
  //     key={3}
  //     className="bg-secondary hover:bg-slate-600 lg:h-[48px] text-accent mt-1 rounded "
  //   >
  //     <span>
  //       Categories
  //       <svg
  //         className="fill-current"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="20"
  //         height="20"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  //       </svg>
  //     </span>
  //     <ul
  //       style={{ zIndex: "222" }}
  //       className="menu menu-compact w-56 p-2 rounded bg-primary"
  //     >
  //       {data?.map((item) => (
  //         <li key={item._id} className="my-1">
  //           <Link
  //             to={`/productsdetails/${item.categoryitemid}`}
  //             className="px-8 py-2 bg-secondary mt-1"
  //           >
  //             {item.categoriesname}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </li>,

  //   checkrole[0]?.userrole === "buyer" ? (
  //     <span key={9} className="flex">
  //       <li key={33}>
  //         <NavLink
  //           to={"/myorders/orderedproduct"}
  //           className={({ isActive }) =>
  //             isActive
  //               ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //               : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //           }
  //         >
  //           My Orders
  //         </NavLink>
  //       </li>
  //     </span>
  //   ) : (
  //     ""
  //   ),

  //   checkrole[0]?.userrole === "seller" ? (
  //     <span key={8} className="flex">
  //       <li>
  //         <NavLink
  //           to={"/buyerdashboard/addproduct"}
  //           className={({ isActive }) =>
  //             isActive
  //               ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //               : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //           }
  //         >
  //           Add Product
  //         </NavLink>
  //       </li>
  //       {advertiseditem?.length > 0 ? (
  //         <li key={14}>
  //           <NavLink
  //             to={"/advertisement"}
  //             className={({ isActive }) =>
  //               isActive
  //                 ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //                 : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //             }
  //           >
  //             Advertise
  //           </NavLink>
  //         </li>
  //       ) : (
  //         ""
  //       )}
  //     </span>
  //   ) : (
  //     ""
  //   ),

  //   checkrole[0]?.userrole === "admin" ? (
  //     <span key={10} className="flex">
  //       <li>
  //         <NavLink
  //           to={"/admindashboard/allsellers"}
  //           className={({ isActive }) =>
  //             isActive
  //               ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //               : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //           }
  //         >
  //           Admin Dashboard
  //         </NavLink>
  //       </li>
  //     </span>
  //   ) : (
  //     ""
  //   ),
  //   <li key={4}>
  //     <NavLink
  //       to={"/blog"}
  //       className={({ isActive }) =>
  //         isActive
  //           ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //           : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //       }
  //     >
  //       Blog
  //     </NavLink>
  //   </li>,
  //   user?.uid ? (
  //     <span key={5} className="flex">
  //       <li>
  //         <button
  //           className="bg-secondary text-accent px-2 py-3 rounded m-1"
  //           onClick={() => logout()}
  //         >
  //           Logout
  //         </button>
  //       </li>
  //     </span>
  //   ) : (
  //     <span key={6} className="flex">
  //       <li>
  //         <NavLink
  //           to={"/login"}
  //           className={({ isActive }) =>
  //             isActive
  //               ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //               : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //           }
  //         >
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink
  //           to={"/signup"}
  //           className={({ isActive }) =>
  //             isActive
  //               ? "bg-accent text-primary px-2 py-3 rounded m-1"
  //               : "bg-secondary text-accent px-2 py-3 rounded m-1"
  //           }
  //         >
  //           SignUp
  //         </NavLink>
  //       </li>
  //     </span>
  //   ),
  // ];

  useEffect(() => {
    window.document
      .querySelector("html")
      .setAttribute("data-theme", `${theme}`);
  }, [theme]);

  const handledarkmode = (e) => {
    e.preventDefault();
    const displaymode = localStorage.getItem("freezermode");
    if (displaymode === "dark") {
      localStorage.setItem("freezermode", "light");
      setTheme("light");
    } else {
      localStorage.setItem("freezermode", "dark");
      setTheme("dark");
    }
  };
  return (
    <div className="bg-secondary mb-12 shadow-md fixed top-0 w-full text-accent">
      <div className="w-4/5 mx-auto flex justify-between items-center py-3">
        <div>freezer</div>
        <div className="flex justify-end items-center">
          {theme === "dark" ? (
            <span
              className="cursor-pointer text-accent flex text-sm justify-center items-center w-8 h-8 bg-secondary p-2 rounded-full"
              onClick={handledarkmode}
            >
              Dark
            </span>
          ) : (
            <span
              className="cursor-pointer text-accent flex text-sm justify-center items-center w-8 h-8 bg-secondary p-2 rounded-full"
              onClick={handledarkmode}
            >
              Light
            </span>
          )}
          <ul className="flex">
            <li>
              <NavLink to={"/"} className={`px-4 py-2`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/productsdetails"} className={`px-4 py-2`}>
                Product
              </NavLink>
            </li>
            {checkrole[0]?.userrole === "buyer" ? (
              <>
                <li>
                  <NavLink to={"/buyerdashboard"} className={`px-4 py-2`}>
                    My Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/advertisement"} className={`px-4 py-2`}>
                    Advertise
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              <NavLink to={"/blog"} className={`px-4 py-2`}>
                Blogs
              </NavLink>
            </li>

            {user ? (
              <li>
                <NavLink onClick={() => logout()} className={`px-4 py-2`}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to={"/signup"} className={`px-4 py-2`}>
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/login"} className={`px-4 py-2`}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to={"/login"} className={`px-4 py-2 font-bold`}>
                {user?.displayName}
              </NavLink>
            </li>
            <li>
              <img
                className="w-7 h-7 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScondNav;
