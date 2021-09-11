import React, { useState } from 'react';
import Nav from './Nav';
import 'normalize.css';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
      <Footer />
    </>
  );
}
