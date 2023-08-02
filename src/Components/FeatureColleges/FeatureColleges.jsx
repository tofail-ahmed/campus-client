



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './College.css'

const FeatureColleges = () => {
      const [colleges, setColleges] = useState([]);
      const [showAll, setShowAll] = useState(false);

      useEffect(() => {
            fetch('https://college-server-tofail-ahmed.vercel.app/colleges')
                  .then(res => res.json())
                  .then(data => {

                        setColleges(data)
                  })
      }, [])
      const handleSeeAllClick = () => {
            setShowAll(true);
      };

      const handleSeeLessClick = () => {
            setShowAll(false);
      };
      // const featureCollege = colleges.slice(0, 3)
      const featureCollege = showAll ? colleges : colleges.slice(0, 3);

      // console.log(colleges);
      return (
            <div className=''>
                  <h1 className='text-center mx-auto mt-12 mb-8 text-4xl font-bold text-slate-600 bg-slate-400 rounded-e-xl border-s-8 border-slate-800 py-4 px-8 md:w-fit'>Featured Campuses</h1>

                  <h1 className='text-6xl text-center my-24'>{featureCollege.length === 0 ? "Loading..." : ' '}</h1>

                  <div className='mx-auto' >
                        {
                              featureCollege.map(college =>
                                    <div className='' key={college._id}>
                                          <div className='college-card md:flex justify-center mx-auto' >
                                                <div className='college-details w-[500px] m-8 flex flex-col justify-center'>
                                                      <h1 className='text-3xl text-center font-bold mt-8 mb-8 text-[#3d583d]'>{college.college_name}</h1>

                                                      <h1 className=''>Admission process: {college.admission_process}</h1>
                                                      <h1 className=''>Admission Date: {college.admission_date}</h1>
                                                      <Link className="btn btn-outline border-b-4 bg-slate-400 w-[150px] my-4" to={`/collegedetails/${college._id}`}>
                                                            More Detail
                                                      </Link>





                                                </div>
                                                <div className='m-8'>
                                                      <img className=' w-[500px] h-[400px] rounded-md' src={college.college_image} alt="" />

                                                </div>


                                          </div>
                                          <hr />
                                    </div>

                              )

                        }
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

export default FeatureColleges;