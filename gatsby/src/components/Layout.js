import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="wrapper">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
}
