import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
    <Fragment>
        <nav className="box nav-bar">
            <Link to="/">
                <Logo />
            </Link>
            <ul className="box">
                <li className="nav-link box-item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="nav-link box-item">
                    <Link to="/locations">Locations</Link>
                </li>
                <li className="nav-link box-item">
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </Fragment>
    )
}

export default Navbar;