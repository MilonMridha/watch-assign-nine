import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const AllReview = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div className='container mx-auto row row-cols-1 row-cols-md-3 g-4 mt-4'>
            {
                reviews.map(review =><Review
                review={review}
                key={review.id}
                ></Review>)
            }
                
            
        </div>
    );
};

export default AllReview;