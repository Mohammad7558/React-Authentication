import React from 'react';
import Header from '../components/Headers/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default Root;