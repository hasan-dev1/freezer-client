import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import ScondNav from '../Pages/Navbar/ScondNav/ScondNav';

const Layout = () => {
    return (
      <div className="bg-primary">
        <ScondNav></ScondNav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Layout;