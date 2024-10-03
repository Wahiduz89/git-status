import React from 'react';
import './Footer.css'; // Optional styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>About Us</h3>
          <p>We are a leading e-commerce platform, offering a wide range of products to cater to your needs. Our mission is to provide the best online shopping experience.</p>
        </div>

        {/* Customer Service Links */}
        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/shipping-info">Shipping Information</a></li>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Commerce Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
