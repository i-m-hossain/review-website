import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import logo from "../../images/download.webp"
import useCategories from '../../hooks/useCategories';
import { Row } from 'react-bootstrap';

const About = () => {
    const [categories] = useCategories()
    return (
        <section style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="py-2">
            <h2 className='text-center mx-5 p-2 rounded mx-auto ' style={{ border: '1px dotted', width: '400px' }}>About us</h2>
            <div className="row mx-5 p-5 mt-3 bg-light rounded" >
                <div className="col-md-9 " style={{borderRight: '2px solid'}}>
                    <span className="bg-dark p-3 rounded">
                        <img src={logo} alt="" />
                    </span>
                    <div className="mt-3">
                        <h4>A platform to learn new technology</h4>
                        <p className="ps-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil suscipit placeat illo consequatur corporis. Earum, vel, deleniti voluptas vitae fugiat molestias dicta eveniet placeat similique in explicabo possimus quidem eos.</p>
                    </div>
                    <div className="mt-3">
                        <h4>A platform to learn new technology</h4>
                        <p className="ps-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil suscipit placeat illo consequatur corporis. Earum, vel, deleniti voluptas vitae fugiat molestias dicta eveniet placeat similique in explicabo possimus quidem eos.</p>
                    </div>
                    <div className="mt-3">
                        <h4>A platform to learn new technology</h4>
                        <p className="ps-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil suscipit placeat illo consequatur corporis. Earum, vel, deleniti voluptas vitae fugiat molestias dicta eveniet placeat similique in explicabo possimus quidem eos.</p>
                    </div>
                </div >
                <div className="col-md-3">
                    <h2 className="text-center">Categories</h2>
                    <Row xs={1} md={1} className="g-4 mx-5 pb-5 mt-3" >
                        
                        {
                            categories.map(category => <SideBar category={category}></SideBar>)
                        }
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default About;