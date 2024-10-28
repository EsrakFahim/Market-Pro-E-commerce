import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderTwo from '../components/HeaderTwo';
import FooterTwo from '../components/FooterTwo';
import BottomFooter from '../components/BottomFooter';

const Main = () => {
      return (
            <div>
                  <HeaderTwo category={false} />
                  <Outlet />
                  <FooterTwo />
                  <BottomFooter />
            </div>
      );
};

export default Main;