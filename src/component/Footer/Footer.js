import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/download.webp'

const Footer = () => {
    return (
        <footer className="bg-dark px-5 pt-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-start ps-5">
                    <img src={logo} alt="" width="120px"/>
                    <p className="text-light mt-2">
                        The automated process starts as soon as your clothes go into the machine.
                    </p>

                </div>
                <div className="col-md-6 col-sm-12">
                    <h6 className="text-light text-center">Links</h6>
                    <div className="d-flex flex-column align-items-center">
                        <Link className="p-1 text-light" to="/services">Services</Link>
                        <Link className="p-1 text-light" to="/subjects">Subjects</Link>
                        <Link className="p-1 text-light" to="/about">About</Link>
                    </div>
                </div>
            </div>
            <p className="text-light mt-5 text-center"> Md Imran Hossain &copy; 2021 All rights reserved</p>
        </footer>
    );
};

export default Footer;