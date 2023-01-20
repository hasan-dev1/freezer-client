import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
      <div className="grid lg:grid-cols-5 grid-cols-1 bg-primary min-h-[70vh]">
        <div className="lg:col-span-1 bg-primary text-accent py-8">
          <div className="lg:text-end text-center">
            <NavLink
              to={"/admindashboard/allsellers"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              All Sellers
            </NavLink>
            <NavLink
              to={"/admindashboard/allbuyers"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              All Buyers
            </NavLink>
            <NavLink
              to={"/admindashboard/makeadmin"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              Make Admin
            </NavLink>
            <NavLink
              to={"/admindashboard/updatefreezer"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              Default Settings
            </NavLink>
          </div>
        </div>
        <div className="lg:col-span-4 bg-secondary rounded text-accent">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default AdminDashboard;