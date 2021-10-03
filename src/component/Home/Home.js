import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="row">
            {
                courses?.map(course => <Course course={course} key={course.id}></Course>)
            }
        </div>
    );
};

export default Home;