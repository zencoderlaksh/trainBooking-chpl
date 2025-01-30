import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Section 1 */}
      <div className="footer-section">
        <h2 className='footer-title-header'>We are very happy<br /> that you choose us</h2>
        <p className='footer-title-text'>
          Thank you for trusting us for choosing trips, exploring, traveling with relatives <br />
          and friends or for your own experiences.
        </p>
      </div>

      {/* Section 2 */}
      <div className="footer-links">
        <ul className='custom-footer-headers'>
          <li>
            <h5 className='footer-header-title'>home</h5>
            <ul className='list-links'>
              <li>about us</li>
              <li>booking</li>
            </ul>
          </li>
          <li>
            <h5 className='footer-header-title'>contact us</h5>
            <ul className='list-links'>
              <li>0703169455</li>
              <li>contact@vanlang.tour</li>
            </ul>
          </li>
          <li>
            <h5 className='footer-header-title'>follow us</h5>
            <ul className='list-links'>
              <li>facebook</li>
              <li>instagram</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Section 3 */}
       <div className='line'></div>
      <div className="footer-bottom-copyright">
        <p>© VanLangTour 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
