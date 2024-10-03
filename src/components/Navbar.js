import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-Commerce</Link>
      </div>
      <ul className={isMobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
        <li>
          <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/shop" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={handleMobileMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
