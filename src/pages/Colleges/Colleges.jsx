import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './College.css'

const Colleges = () => {
      const [colleges, setColleges] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/colleges')
                  .then(res => res.json())
                  .then(data => {

                        setColleges(data)
                  })
      }, [])
      console.log(colleges);
      return (
            <div>

                  <h2 className=''>This is Colleges</h2>
                  <div >
                        {
                              colleges.map(college =>
                                    <div className='college-card md:flex' key={college._id}>
                                          <div className='m-8'>
                                                <img className=' w-[500px] h-[400px] rounded-md' src={college.college_image} alt="" />
                                                <Link className="btn btn-outline border-b-4 bg-slate-400 w-[150px] my-4" to={`/collegedetails/${college._id}`}>
                                                      More Detail
                                                </Link>
                                          </div>

                                          <div className='college-details w-[500px] m-8 flex flex-col justify-center'>
                                                <h1 className=''>{college.college_name}</h1>
                                                <h1 className=''>Admission process: {college.admission_process}</h1>
                                                <h1 className=''>Admission Date: {college.admission_date}</h1>
                                                <div>
                                                      <h1 className='underline hover:text-6xl'>Events</h1>
                                                      <span>1. {college.events[0].event_name}</span>:
                                                      <span>{college.events[0].event_details}</span>
                                                      <h1>Scheduled At: {college.events[0].event_date}</h1>

                                                </div>
                                                <div>
                                                      <span>2. {college.events[1].event_name}</span>:
                                                      <span>{college.events[1].event_details}</span>
                                                      <h1>Scheduled At: {college.events[1].event_date}</h1>

                                                </div>
                                                <div>
                                                      <span>3. {college.events[2].event_name}</span>:
                                                      <span>{college.events[2].event_details}</span>
                                                      <h1>Scheduled At: {college.events[2].event_date}</h1>

                                                </div>
                                                <div>
                                                      <h1 className='underline hover:text-6xl'>Top Researches </h1>
                                                      <h1>1. {college.research_history[0].research_details}</h1>
                                                      <h1>2. {college.research_history[1].research_details}</h1>


                                                </div>
                                                <div>
                                                      <h1 className='underline hover:text-6xl'>Sports Facility</h1>
                                                      <div>
                                                            <span>1.{college.sports_details[0].sports_categories}</span>
                                                            <span> (Extra Facility: {college.sports_details[0].other_facilities})</span>  </div>
                                                      <div>
                                                            <span>1.{college.sports_details[1].sports_categories}</span>
                                                            <span> (Extra Facility: {college.sports_details[1].other_facilities})</span>     </div>
                                                      <div>
                                                            <span>1.{college.sports_details[2].sports_categories}</span>
                                                            <span> (Extra Facility: {college.sports_details[2].other_facilities})</span>  </div>

                                                </div>

                                                
                                          </div>

                                    </div>

                              )

                        }
                  </div>
            </div>
           
      );
};

export default Colleges;