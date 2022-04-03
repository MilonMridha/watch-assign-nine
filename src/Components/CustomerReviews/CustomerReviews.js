import React from 'react';
import { Card } from 'react-bootstrap';


const CustomerReviews = (props) => {
    const { review } = props;
    const { name, reviews, ratting } = review;

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
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

export default CustomerReviews;