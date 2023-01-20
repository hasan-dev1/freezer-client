import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Buyerdashboard = () => {
   
    return (
      <div className="grid lg:grid-cols-5 grid-cols-1 bg-primary pt-16 ">
        <div className="lg:col-span-1 bg-primary text-accent py-8 ">
          <div className="lg:text-end text-center">
            <NavLink
              to={"/buyerdashboard/addproduct"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              Add Product
            </NavLink>
            <NavLink
              to={"/buyerdashboard/myproduct"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              My Product
            </NavLink>
            <NavLink
              to={"/buyerdashboard/mybuyers"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              My Buyers
            </NavLink>
          </div>
        </div>
        <div className="lg:col-span-4 bg-secondary rounded text-accent">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Buyerdashboard;