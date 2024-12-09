import React from 'react';
//import './project.css';
import "font-awesome/css/font-awesome.min.css";
import logo from "../assets/logoo.png";

function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer-title">
                <img className="mt-4 mb-2" src={logo} alt="logo" width="200px" />
            </h1>
            <nav className="footer-nav">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact</a>
            </nav>

            <div className="social-icons mt-3 d-flex">
                <a href="#"><i className="fa fa-facebook ms-2 mt-3"></i></a>
                <a href="#"><i className="fa fa-twitter ms-2 mt-3"></i></a>
                <a href="#"><i className="fa fa-instagram ms-2 mt-3"></i></a>
                <a href="#"><i className="fa fa-linkedin ms-2 mt-3"></i></a>
            </div>

            <div className="copyright">
                © 2023 <span className='text-warning'>FawziUiUx</span> All Rights Reserved, Inc.
            </div>
        </footer>
    );
}

export default Footer;
