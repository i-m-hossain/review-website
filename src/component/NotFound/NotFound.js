import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="p-5">
                <h1 className="text-secondary" style={{ fontSize: "200px" }}>404</h1>
                <h2 style={{ fontSize: "40px" }}>Oops! This page could not be found</h2>
                <p className='text-uppercase'>
                    sorry! but the page you are loooking for does not exist, have been removed, name changed or is temporarily unavailable
                </p>
                <Link to='/' className="bg-dark text-uppercase px-5 py-2 mx-auto text-center text-decoration-none rounded" style={{ border: '0', color: '#fff', fontWeight: "bold", }}>GO TO HOMEPAGE
                </Link>
            </div>
        </div>
    );
};

export default NotFound;