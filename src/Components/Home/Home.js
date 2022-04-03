import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import image from '../../image/watch2.png'
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import './Home.css'


const Home = () => {

    const [reviews, setReviews] = useReview();
    const threeReview = reviews.slice(0, 3);

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
                    <div className=' container row row-cols-1 row-cols-md-3 g-4 mt-2'>
                        {
                            threeReview.map(review => <CustomerReviews
                                review={review}
                                key={review.id}
                            ></CustomerReviews>)
                        }
                    </div>


                </div>

            </div>
            <div className='mt-3 p-3 mb-4'>
                <Link className='btn btn-primary' to="/review">See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;