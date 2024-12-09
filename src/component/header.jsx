import React from 'react';
//import './project.css';
import logo from "../assets/logoo.png";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-orange bg-color py-4">
            <div className="container">

            <img className="logo" src={logo} alt="logo" width="200px"/>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul id="navbar-list" className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>
                    <a href="#" class="btn btn-lg btn-orange text-sm">Download CV</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
