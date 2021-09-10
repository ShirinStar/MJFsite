import React, { useState } from 'react';
import Nav from './Nav';
import 'normalize.css';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Nav />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
