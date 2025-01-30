import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children, bgImage }) => {
  return (
    <div
      className="layout-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '150vh',
        position: 'relative',
      }}
    >
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
