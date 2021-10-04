import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import useCourses from '../../hooks/useCourses';
import Category from '../Category/Category';
import Course from '../Course/Course';
const Home = () => {
    const [courses] = useCourses()
    const [categories] = useCategories()
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
                    <Link to='/categories' className="bg-dark text-uppercase px-5 py-2 mx-auto text-center text-decoration-none rounded" style={{  border: '0', color: '#fff', fontWeight: "bold",  }}>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "20px" }} /> All categories
                    </Link>
                
                
                </Row>

            </div>
        </section>

    );
};

export default Home;