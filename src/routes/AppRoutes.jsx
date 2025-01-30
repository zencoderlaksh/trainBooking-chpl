import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';
import SignupPage from '../views/auth/SignupPage';
import AboutPage from '../views/about/AboutPage';
import BookingPage from '../views/booking/BookingPage';
import LoginPage from '../views/auth/LoginPage';
import HomePage from '../views/mainPage/HomePage';
import images from '../assets/identifier';
import LandingPage from '../views/landingPage/LandingPage';
import Loader from '../utils/loader/Loader';
import useLoaderStore from '../zustand/store/store';

const AppRoutes = () => {
  // for the global loader show
  const location = useLocation();
  const {loading, setLoading} = useLoaderStore();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 5000); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader/>}
     <Routes>
      <Route path="/" element={<Layout><SignupPage /></Layout>} />
      <Route path="/about-us" element={<Layout bgImage={images.homepage}   ><AboutPage /></Layout>} />
      <Route path="/booking" element={<Layout bgImage={images.bookingbg} ><BookingPage /></Layout>} />
      <Route path="/login" element={<Layout bgImage={images.landingbg}><LoginPage /></Layout>} />
      <Route path="/signup" element={<Layout bgImage={images.landingbg}><SignupPage /></Layout>} />
        <Route path="/landing" element={<Layout  bgImage={images.landingbg}><LandingPage  /></Layout>} />
      
      <Route 
        path="/home" 
        element={<Layout bgImage={images.homepage}><HomePage /></Layout>} 
      />
    </Routes>
    </>
   
  );
};

export default AppRoutes;
