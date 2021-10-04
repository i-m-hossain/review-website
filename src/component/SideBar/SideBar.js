import React from 'react';
import { Card, Col} from 'react-bootstrap';

const SideBar = (props) => {
    const{image, title} =props.category
    return (
        <Col>
            <Card >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                </Card.Body>

            </Card>
        </Col>
        
    );
};

export default SideBar;