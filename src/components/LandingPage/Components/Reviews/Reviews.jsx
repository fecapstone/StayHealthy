import React from 'react';
import "./Reviews.css";

const Reviews = () => {
  return (
    <div>
      <div className='cards'>
        <div className="card">
        
            <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg" alt="img" />
        
            <div class="review-content">
                <div class="author">John Doe</div>
                <div class="date">May 23,2078</div>
                <div class="comment">The food is great for your health and it provides all the nutrions
                    required for your body</div>
                <div class="rating">Rating:
                    <span>&#9733;&#9733;&#9733;&#9733;</span>
                    </div>
                </div>
        </div>
        <div className="card">
            <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg" alt="img"/>
 
            <div class="review-content">
                        <div class="author">John Doe</div>
                        <div class="date">May 23,2078</div>
                        <div class="comment">The food is great for your health and it provides all the nutrions
                            required for your body</div>
                        <div class="rating">Rating:
                        <span>&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                    </div>
</div>
        </div>
    </div>
  )
}

export default Reviews