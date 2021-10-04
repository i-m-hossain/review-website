import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';
import useCategories from '../../hooks/useCategories'

const Services = () => {
    const [courses, setCourses] = useCourses()
    const [categories] = useCategories()
    return (
        <section style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="pt-2">
            <h2 className='text-center mx-5 p-2 rounded mx-auto ' style={{ border: '1px dotted', width: '400px' }}>Services</h2>
            <div className="row">
                <div className="col-md-9 my-3" style={{ borderRight: '2px solid' }}>
                    <h2 className="ms-5 ps-3">Courses</h2>
                    <Row xs={1} md={3} className="g-4 mx-5 pb-5 mt-3" >
                        {
                            courses?.map(course => <Course course={course} key={course.id}></Course>
                            )
                        }
                    </Row>
                </div>
                <div className="col-md-3 my-3">
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

export default Services;