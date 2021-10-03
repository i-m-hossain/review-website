import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    courses?.map(course => {
                        const { title, Rating, price, image, description} = course
                        return <Col key={course.id}>
                                    <Card>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>
                                            <Card.Text>
                                        {description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                    })
                }
            </Row>
        </div>
    );
};

export default Services;