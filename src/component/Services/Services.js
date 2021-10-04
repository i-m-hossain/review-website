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
        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <h2 className='text-center pt-3'>Services</h2>
            <Row xs={1} md={3} className="g-4 mx-5 pb-5 mt-3">
                {
                    courses?.map(course =>  <Course course={course} key={course.id}></Course>
                    )
                }
            </Row>
        </div>
    );
};

export default Services;