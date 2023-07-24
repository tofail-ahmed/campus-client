import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
      return (
            <div>
                  <Header></Header>
                  
                  <Outlet></Outlet>
                  <Footer></Footer>

            </div>
      );
};

export default Main;