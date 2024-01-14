import React from "react";

import Footer from "./footer";
import Header from "./header";

//import { BrowserRouter as Router } from 'react-router-dom';
//import { basename } from '../config';

const Layout = ({ children }: { children: any }) => (
  <div className="flex flex-col min-h-screen">
    <Header />

    <main className="flex-grow">
      <div className="container mx-auto px-4">{children}</div>
    </main>

    <Footer />
  </div>
);

export default Layout;
