import React, { useEffect, useState } from 'react';

const CollegeGallery = () => {
      const [pictures, setPictures] = useState([]);
      const [showAll, setShowAll] = useState(false);

      useEffect(() => {
            fetch('https://college-server-tofail-ahmed.vercel.app/gallerys')
                  .then(res => res.json())
                  .then(data => {
                        setPictures(data[0].data);
                        console.log(data[0].data);
                  });
      }, []);

      const handleSeeAllClick = () => {
            setShowAll(true);
      };

      const handleSeeLessClick = () => {
            setShowAll(false);
      };

      const displayedPictures = showAll ? pictures : pictures.slice(0, 3);
      if (pictures.length === 0) {
            return <div>Loading...</div>; // You can show a loading state here
      }

      return (
            <div className='my-12'>

                  <h1 className='text-center mx-auto mt-12 mb-8 text-4xl font-bold text-slate-600 bg-slate-400 rounded-e-xl border-s-8 border-slate-800 py-4 px-8 md:w-fit'>Graduation Party Gallery</h1>

                  <div className='md:grid grid-cols-3 gap-12'>
                        {displayedPictures.map(picture => (
                              <div className='mx-8 ' key={picture._id}>
                                    <h1>{picture.title}</h1>
                                    <img className='w-[300px] h-[200px]' src={picture.image} alt='' />
                                    <h1>{picture.college_name}</h1>
                                    <h1>{picture.details}</h1>
                                    <h1>{picture.date}</h1>
                                    <hr />
                              </div>
                        ))}
                  </div>

                  <div className='text-center'>
                        {showAll ? (
                              <button onClick={handleSeeLessClick} className='my-4 px-4 py-2 border-b-4 bg-slate-200  font-bold hover:bg-slate-600 hover:text-slate-400 border-slate-800 rounded-2xl'>
                                    See Less
                              </button>
                        ) : (
                              <button onClick={handleSeeAllClick} className='my-4 px-4 py-2 border-b-4 bg-slate-200  font-bold hover:bg-slate-600 hover:text-slate-400 border-slate-800 rounded-2xl'>
                                    See All
                              </button>
                        )}
                  </div>
            </div>
      );
};

export default CollegeGallery;
