import React from 'react';
import image from '../../image/watch2.png'
import './Home.css'


const Home = () => {
    return (
        <div className='container mt-5'>
            <div className='row main'>
                <div className='col-md-8'>
                    <h1>My Favourite <span className='text-primary'>Watch</span> </h1>
                    <h1>Your <span className='text-primary'>Favourite</span> <span >Watch</span> </h1>
                    <p><small>It is a wrist watch. It has a leather belt which is really beautiful. It is made of silver. It has twelve markings. It keeps the time correct. It has made me more regular and punctual.</small></p>
                </div>
                <div className='product-img col-md-4 mb-3'>
                    <img src={image} alt="" />
                </div>
                <div className='container mt-5'>
                    <h2>Customer Reviews</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;