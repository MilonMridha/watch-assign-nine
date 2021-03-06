import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'
const Review = (props) => {
    const {review} = props;
    const {name, reviews, ratting, img} = review;
    return (
        <div className='container'>
             <Card style={{ width: '18rem' }} className="shadow rounded">
                 
                <Card.Body className='bg-light'>
                <img className='review-img' src={img} alt="" />
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> Ratting : {ratting}</Card.Subtitle>
                    <Card.Text> <h6>Reviews :</h6>
                        {reviews}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;