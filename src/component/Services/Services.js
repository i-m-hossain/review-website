import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <section style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="pt-2">
            <h2 className='text-center mx-5 p-2 rounded mx-auto ' style={{ border: '1px dotted', width: '400px' }}>Services</h2>
            <div className="row">
                <div className="col-md-8 my-3" style={{ borderRight: '2px solid' }}>
                    <Row xs={1} md={3} className="g-4 mx-5 pb-5 mt-3" >
                        {
                            courses?.map(course => <Course course={course} key={course.id}></Course>
                            )
                        }
                    </Row>
                </div>
                <div className="col-md-4">
                        This is sidebar
                </div>
            </div>
        </section>
        
    );
};

export default Services;