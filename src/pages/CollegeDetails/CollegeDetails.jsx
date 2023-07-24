import React from 'react';
import { Parallax } from 'react-parallax';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
      const { _id, college_name, admission_process, admission_date, events, research_history, sports_details, college_image } = useLoaderData();


      // const divStyle = {
      //       backgroundImage: `url(${college_image})`,
      //       backgroundSize: 'cover',
      //       backgroundPosition: 'center',
      //       // Add any other background-related CSS properties as needed
      //       // For parallax effect, we use fixed position and translate transform
      //       position: 'fixed',
      //       top: 0,
      //       left: 0,
      //       width: '100%',
      //       height: '100%',
      //       zIndex: -1,
      //     };
      return (
            <div className='text-black-400' >

                  <h1 className='text-center text-4xl font-bold my-12 text-slate-600'>{college_name}</h1>
                  <Parallax className='border-8 rounded-full' bgImage={college_image} strength={400} style={{ height: 500 }}>
                  </Parallax>
                  <div >

                        <div className='  m-8 flex flex-col justify-center' >
                              <h1 className=''>{college_name}</h1>
                              <h1 className=''>Admission process: {admission_process}</h1>
                              <h1 className=''>Admission Date: {admission_date}</h1>
                              <div>
                                    <h1 className=''>Events</h1>
                                    <span>1. {events[0].event_name}</span>:
                                    <span>{events[0].event_details}</span>
                                    <h1>Scheduled At: {events[0].event_date}</h1>

                              </div>
                              <div>
                                    <span>2. {events[1].event_name}</span>:
                                    <span>{events[1].event_details}</span>
                                    <h1>Scheduled At: {events[1].event_date}</h1>

                              </div>
                              <div>
                                    <span>3. {events[2].event_name}</span>:
                                    <span>{events[2].event_details}</span>
                                    <h1>Scheduled At: {events[2].event_date}</h1>

                              </div>
                              <div>
                                    <h1 className='underline hover:text-6xl'>Top Researches </h1>
                                    <h1>1. {research_history[0].research_details}</h1>
                                    <h1>2. {research_history[1].research_details}</h1>


                              </div>
                              <div>
                                    <h1 className='underline hover:text-6xl'>Sports Facility</h1>
                                    <div>
                                          <span>1.{sports_details[0].sports_categories}</span>
                                          <span> (Extra Facility: {sports_details[0].other_facilities})</span>  </div>
                                    <div>
                                          <span>1.{sports_details[1].sports_categories}</span>
                                          <span> (Extra Facility: {sports_details[1].other_facilities})</span>     </div>
                                    <div>
                                          <span>1.{sports_details[2].sports_categories}</span>
                                          <span> (Extra Facility: {sports_details[2].other_facilities})</span>  </div>

                              </div>


                        </div>
                  </div>

            </div>
      );
};

export default CollegeDetails;