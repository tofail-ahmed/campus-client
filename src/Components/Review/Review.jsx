import React, { useEffect, useState } from 'react';

const Review = () => {
      const [reviews, setReviews] = useState([]);
      const [showAll, setShowAll] = useState(false);
      useEffect(() => {
            fetch(`/public/review.json`).then(res => res.json()).then(data => {
                  setReviews(data)
            })
      }, [])

      const handleSeeLess = () => {
            setShowAll(false)
      }
      const handleSeeMore = () => {
            setShowAll(true);
      };
      const displayedReview = showAll ? reviews : reviews.slice(0, 3);



      return (
            <div className='mx-8 my-12 text-center'>

                  <h1 className='text-center mx-auto mt-12 mb-8 text-4xl font-bold text-slate-600 bg-slate-400 rounded-e-xl border-s-8 border-slate-800 py-4 px-8 md:w-fit'>Top Reviews</h1>


                  <div>
                        {
                              displayedReview.map(review => (
                                    <div className='my-8' key={review._id}>
                                          <h1 className='text-md font-semibold'><span className='text-slate-800'>Mr. {review.user}</span> Says on <span className='text-slate-700'>{review.college}</span>,</h1>
                                          <h1 className='mx-24'>"{review.review}"</h1>


                                          <hr />
                                    </div>
                              ))
                        }
                        <div>

                              {
                                    showAll ?
                                          <button className='my-4 px-4 py-2 border-b-4 bg-slate-200 font-bold hover:bg-slate-600 hover:text-slate-400 border-slate-800 rounded-2xl' onClick={handleSeeLess}>See Less</button> :
                                          <button className='my-4 px-4 py-2 border-b-4 bg-slate-200 font-bold hover:bg-slate-600 hover:text-slate-400 border-slate-800 rounded-2xl' onClick={handleSeeMore}>See More</button>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Review;