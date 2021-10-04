
import { faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Course = (props) => {
    const { title, rating, author, id, image, price} = props.course
    const history = useHistory()
    const handleClick = () =>{
        history.push(`details/${id}`)
    }
    const emptySymbol = <FontAwesomeIcon icon={faStar} className="text-light" />
    const fullSymbol = <FontAwesomeIcon icon={faStar} className="text-warning" />
    return (
        <Col>
            <Card style={{height: '440px'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Author: <span className="text-danger">{author}</span> </p>
                        <p>Price: <span className="text-danger">${price}</span> </p>
                        
                    </div>
                    <p className="text-center">
                        <Rating
                            initialRating={rating}
                            emptySymbol={emptySymbol}
                            fullSymbol={fullSymbol}
                            readonly
                        />({rating})
                    </p>
                </Card.Body>
                <Card.Footer  className=" bg-dark d-flex justify-content-center">
                    <Button onClick={handleClick} style={{ border: '0', color: '#000', fontWeight: "bold" }} className="text-uppercase bg-dark text-light">
                    <FontAwesomeIcon icon={faInfoCircle} style={{fontSize: "20px"}}/>  Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;