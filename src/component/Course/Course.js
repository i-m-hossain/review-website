import React from 'react';
import { useHistory } from 'react-router';

const Course = (props) => {
    const {title,Rating, author, id, image, price} = props.course
    const history = useHistory()
    const handleClick = () =>{
        history.push(`details/${id}`)
    }
    return (
        <div className="col-md-4 col-sm-6">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{Rating}</p>
            <p>{author}</p>
            <button onClick={handleClick}>Course details</button>

        </div>
    );
};

export default Course;