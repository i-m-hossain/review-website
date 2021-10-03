import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/download.webp'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        borderBottom: '2px solid red'
    }
    const link = {
        color: '#fff',
        padding: '15px',
        textDecoration: 'none',

    }
    return (
        <nav className="bg-dark p-3">
            <div className="row">
                <div className=" col-md-4">
                    <img src={logo} alt="" width="80" />
                </div>
                <div className="col-sm-12 col-md-8">
                    <NavLink style={link} activeStyle={activeStyle} exact to="/">
                        Home
                    </NavLink>
                    <NavLink style={link} activeStyle={activeStyle} to="/services">
                        Services
                    </NavLink>
                    <NavLink style={link} activeStyle={activeStyle} to="/subjects">
                        Subjects
                    </NavLink>
                    <NavLink style={link} activeStyle={activeStyle} to="/about">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;