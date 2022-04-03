import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='mt-5 container mx-auto justify-content-center d-flex'>
            <Card style={{ width: '18rem' }} className="shadow rounded">
                <Card.Body className='bg-light'>
                    <Card.Title> <h1 className='text-primary'> Hi!! We are Here. Do you know About me? </h1></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> <h1 className='text-success'>So you should entry here..</h1></Card.Subtitle>
                    <Card.Text>
                    
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;