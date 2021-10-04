import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Course = (props) => {
    const { title, Rating, author, id, image, price, description} = props.course
    const history = useHistory()
    const handleClick = () =>{
        history.push(`details/${id}`)
    }
    return (
        <Col>
            <Card style={{height: '450px'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: '#FFFF00'}} className="d-flex justify-content-center">
                    <Button onClick={handleClick} style={{ backgroundColor: '#FFFF00', border: '0', color: '#000',fontWeight:"bold" }} className="text-uppercase">
                    <FontAwesomeIcon icon={faInfoCircle} style={{fontSize: "20px"}}/>  Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;