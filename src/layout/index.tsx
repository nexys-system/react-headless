import React from 'react';

import Footer from './footer';
import Header from './header';

//import { BrowserRouter as Router } from 'react-router-dom';
//import { basename } from '../config';

const Layout = ({ children }: { children: any }) => (
  <div className="d-flex flex-column min-vh-100">
    <Header />

    <main className="flex-fill">
      <div className="container">{children}</div>
    </main>

    <Footer />
  </div>
);

export default Layout;
