import React from 'react';
import './Footer.scss';
const Footer: React.FC = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__links">
            <div className="footer__links--column">
              <div className="footer__links--column-title">Shop and Learn</div>
              <a href="">Mac</a>
              <a href="">iPad</a>
              <a href="">iPhone</a>
              <a href="">Watch</a>
              <a href="">TV</a>
              <a href="">Music</a>
              <a href="">AirPods</a>
              <a href="">HomePod</a>
              <a href="">iPod touch</a>
              <a href="">Accessories</a>
              <a href="">Gift Card</a>
            </div>
            <div className="footer__links--column">
              <div className="footer__links--column-title">Services</div>
              <a href="">Apple Music</a>
              <a href="">Apple TV+</a>
              <a href="">Apple Fitness+</a>
              <a href="">Apple News+</a>
              <a href="">Apple Arcade</a>
              <a href="">iCloud</a>
              <a href="">Apple One</a>
              <a href="">Apple Card</a>
              <a href="">Apple Books</a>
              <a href="">App Store</a>
              <div className="footer__links--column-title">Account</div>
              <a href="">Manage Your Apple ID</a>
              <a href="">Apple Store Account</a>
              <a href="">iCloud.com</a>
            </div>
            <div className="footer__links--column">
              <div className="footer__links--column-title">Apple Store</div>
              <a href="">Find a Store</a>
              <a href="">Shop Online</a>
              <a href="">Genius Bar</a>
              <a href="">Today at Apple</a>
              <a href="">Apple Camp</a>
              <a href="">Apple store App</a>
              <a href="">Refurbished and Clearance</a>
              <a href="">Apple Trade In</a>
              <a href="">Order Status</a>
              <a href="">Shopping Help</a>
            </div>
            <div className="footer__links--column">
              <div className="footer__links--column-title">For Business</div>
              <a href="">Apple and Business</a>
              <a href="">Shop and Business</a>
              <div className="footer__links--column-title">For Education</div>
              <a href="">Apple and Education</a>
              <a href="">Shop for K-12</a>
              <a href="">Shop College</a>
              <div className="footer__links--column-title">For Healthcare</div>
              <a href="">Apple in Healthcare</a>
              <a href="">Health on Apple Watch</a>
              <a href="">Health Records on iPhone</a>
              <div className="footer__links--column-title">For Government</div>
              <a href="">Shop for Government</a>
              <a href="">Shop for Veterans and Military</a>
            </div>
            <div className="footer__links--column">
              <div className="footer__links--column-title">Apple Values</div>
              <a href="">Accessibility</a>
              <a href="">Education</a>
              <a href="">Environment</a>
              <a href="">Inclusion and Diversity</a>
              <a href="">Privacy</a>
              <a href="">Supplier Responsibility</a>
              <div className="footer__links--column-title">About Apple</div>
              <a href="">Newsroom</a>
              <a href="">Apple Leadership</a>
              <a href="">Job Opportunities</a>
              <a href="">Investors</a>
              <a href="">Events</a>
              <a href="">Contact Apple</a>
            </div>
          </div>
          <div className="footer__more">
            More ways to shop: <a href="">Find an Apple Store</a> or
            <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="footer__copyright">
            <p>Copyright © 2020 Apple Inc. All rights reserved.</p>
            <a href="">United States</a>
            <div className="links">
              <a href="">Privacy Policy</a>
              <a href="">Terms of Use</a>
              <a href="">Sales and Refunds</a>
              <a href="">Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
