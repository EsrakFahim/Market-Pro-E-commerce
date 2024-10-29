import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderTwo from '../components/HeaderTwo';
import FooterTwo from '../components/FooterTwo';
import BottomFooter from '../components/BottomFooter';
import PhosphorIconInit from '../helper/PhosphorIconInit';
import RouteScrollToTop from '../helper/RouteScrollToTop';
import ScrollToTop from 'react-scroll-to-top';

const Main = () => {
      return (
            <div>
                  <RouteScrollToTop />
                  <PhosphorIconInit />
                  <ScrollToTop smooth color="#FA6400" />

                  <HeaderTwo category={false} />
                  <Outlet />
                  <FooterTwo />
                  <BottomFooter />
            </div>
      );
};

export default Main;