import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyOrder = () => {
    return (
      <div className="grid lg:grid-cols-5 grid-cols-1 bg-primary pt-16">
        <div className="lg:col-span-1 bg-primary text-accent py-8">
          <div className="lg:text-end text-center">
            <NavLink
              to={"/myorders/orderedproduct"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              Ordered Product
            </NavLink>
            <NavLink
              to={"/myorders/wishlist"}
              className={({ isActive }) =>
                isActive
                  ? "py-2 my-1 bg-secondary block p-3 text-xl"
                  : "bg-primary py-2 my-1 block p-3 text-xl"
              }
            >
              Whishlist
            </NavLink>
          </div>
        </div>
        <div className="lg:col-span-4 bg-secondary rounded text-accent min-h-[70vh]">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MyOrder;