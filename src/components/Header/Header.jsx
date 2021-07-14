import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar">
            <span className="navbar-brand mb-0 h1 portfolioName">Valentin Garcia</span>
            <ul>
                <li>
                    <a class="nav-link" href="#/">About Me</a>
                </li>
                <li>
                    <a class="nav-link" href="#/portfolio">My Portfolio</a>
                </li>
                <li>
                    <a class="nav-link" href="#/contact">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;