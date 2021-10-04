import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';


const Details = () => {
    const { courseId } = useParams()
    const [courses, setCourses] =useState([])
    useEffect(()=>{
        fetch('/fakeData.JSON')
        .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    const courseDetails = courses.find(course => course.id === courseId)
    const emptySymbol = <FontAwesomeIcon icon={faStar} className="text-light"/>
    const fullSymbol = <FontAwesomeIcon icon={faStar} className="text-warning"/>
    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="pt-2">
            <Row className="d-flex justify-content-center p-4">
                <Col xs={12} md={6}>
                    <Card >
                        <Card.Img variant="top" src={courseDetails?.image} />
                        <Card.Body>
                            <Card.Title>{courseDetails?.title}</Card.Title>
                            <Card.Text>
                                {courseDetails?.description}
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <h6>Author: <span className="text-danger">{courseDetails?.author}</span> </h6>
                                <p>Price: <span className="text-danger">${courseDetails?.price}</span> </p>
                                <p>
                                    <Rating
                                        initialRating={courseDetails?.Rating}
                                        emptySymbol={emptySymbol}
                                        fullSymbol={fullSymbol}
                                        readonly
                                    />({courseDetails?.Rating})
                                </p>
                                

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Details;