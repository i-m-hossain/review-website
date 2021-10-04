import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../Course/Course';
const Home = () => {
    const [courses, setCourses] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    useEffect(() => {
        fetch('/fakeSubjects.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const homeCourses = courses.slice(0, 4)
    const homeCategories = categories.slice(0, 4)
    return (
        <section style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <div>
                <h2 className='text-center pt-3'>Featured Courses</h2>
                <div className="border rounded mx-auto border-dark" style={{ height: '2px', width: "200px" }}></div>
                <Row xs={1} md={4} className="g-4 mx-5 pb-5 mt-3">
                    {
                        homeCourses?.map(course => <Course course={course} key={course.id}></Course>)
                    }
                </Row>
            </div>
            <div>
                <h2 className='text-center'>Featured Categories</h2>
                <div className="border rounded mx-auto border-dark" style={{ height: '2px', width: "200px" }}></div>
                <Row xs={1} md={4} className="g-4 mx-5 pb-5 mt-3">
                    {
                        homeCategories?.map(category => <Category category={category} key={category.id}></Category>)
                    }
                    <Link to='/category' className="text-uppercase px-5 py-2 mx-auto text-center text-decoration-none rounded" style={{ backgroundColor: '#FFFF00', border: '0', color: '#000', fontWeight: "bold",  }}>
                        All categories
                    </Link>
                
                
                </Row>

            </div>
        </section>

    );
};

export default Home;