import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/download.webp'

const Header = () => {
   
    const activeStyle = {
        fontWeight: "bold",
        color: "#FFFF00",
        borderBottom: '3px solid #FFFF00'
    }
    const link = {
        color: '#fff',
        padding: '16px',
        textDecoration: 'none',

    }
    return (
        <nav className="bg-dark p-3">
            <div className="row">
                <div className="col-md-4 col-sm-none d-flex justify-content-center align-items-center">
                    <Link to="/"> <img src={logo} alt="" width="110" /></Link>
                </div>
                <div className="col-sm-12 col-md-8 d-flex justify-content-center ">
                    
                    <div>
                        <NavLink style={link} activeStyle={activeStyle} exact to="/">
                            Home
                        </NavLink>
                        <NavLink style={link} activeStyle={activeStyle} to="/services">
                            Services
                        </NavLink>
                        <NavLink style={link} activeStyle={activeStyle} to="/categories">
                            Categories
                        </NavLink>
                        <NavLink style={link} activeStyle={activeStyle} to="/about">
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;