import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Category = (props) => {
    const {title, image} = props.category
    return (
        <div>
            <Col>
                <Card >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="text-center">{title}</Card.Title>
                    </Card.Body>
                    
                </Card>
            </Col>
        </div>
    );
};

export default Category;