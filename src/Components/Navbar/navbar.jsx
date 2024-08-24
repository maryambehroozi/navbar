// src/components/Navbar.js

import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCamera } from '@fortawesome/free-solid-svg-icons'; // Import the camera icon
import { faEnvelope, faUser, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png'; // Import the logo image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Logo" className="navbar__logo-image" />
            </div>
            <div className="navbar__search">
                <select className="navbar__dropdown">
                    <option value="products">Products</option>
                </select>
                <span className="navbar__camera-icon">
                    <FontAwesomeIcon icon={faCamera} />
                </span>
                <input type="text" className="navbar__input" placeholder="Enter a keyword to search products" />
                <button className="navbar__search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="navbar__links">
                <button className="navbar__rfq">
                    <FontAwesomeIcon icon={faPaperPlane} /> Post My RFQ
                </button>
                <button className="navbar__sign-in">
                    <FontAwesomeIcon icon={faUser} /> Sign in / Join
                </button>
                <button className="navbar__messages">
                    <FontAwesomeIcon icon={faEnvelope} /> Messages
                </button>
                <button className="navbar__inquiry-basket">
                    <FontAwesomeIcon icon={faShoppingBasket} /> Inquiry Basket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
