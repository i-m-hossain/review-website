import React, { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import logo from "../../images/download.webp";
import { Row } from 'react-bootstrap';
import { SidebarContext } from '../../App';

const About = () => {
    const [categories] = useContext(SidebarContext)
    return (
        <section style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="py-2">
            <h2
                className='text-center mx-5 p-2 rounded mx-auto '
                style={{ border: '1px dotted', width: '400px' }}>
                About us
            </h2>
            <div className="row mx-5 p-5 mt-3 bg-light rounded" >
                <div className="col-md-9 " style={{ borderRight: '2px solid' }}>
                    <span className="bg-dark p-3 rounded">
                        <img src={logo} alt="logo"/>
                    </span>
                    <div className="mt-3 bg-dark rounded p-3 text-light">
                        <h4>A platform to learn new technology</h4>
                        <p >We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace</p>
                        <p>We belive in:</p>
                        <ul className="ms-4">
                            <li>Learning</li>
                            <li>Dedication</li>
                            <li>Discipline</li>
                            <li>Patience</li>
                            <li>Hardwork</li>
                            <li>Dream</li>
                        </ul>
                    </div>
                    <div className="mt-3 bg-dark rounded p-3 text-light">
                        <h4>We share knowledge with the world</h4>
                        <p>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
                    </div>
                    <div className="mt-3 bg-dark rounded p-3 text-light">
                        <h4>Changing learning for the better</h4>
                        <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge</p>
                    </div>
                    <div className="mt-3 bg-dark rounded p-3 text-light">
                        <h4>Work with us</h4>
                        <p> we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                    </div>
                    <div className="mt-3 bg-dark rounded p-3 text-light">
                        <h4>See our research</h4>
                        <p> We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace</p>
                    </div>
                    <div className="mt-3 bg-dark rounded p-3 text-light">
                        <h4>Read our blog</h4>
                        <p> Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</p>
                    </div>
                </div >
                <div className="col-md-3">
                    <h2 className="text-center">Categories</h2>
                    <Row xs={1} md={1} className="g-4 mx-5 pb-5 mt-3" >

                        {
                            categories?.map(category => <SideBar category={category}></SideBar>)
                        }
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default About;