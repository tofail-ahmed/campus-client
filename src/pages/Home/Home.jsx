import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const Home = () => {

      const [searchTerm, setSearchTerm] = useState('');
      const [searchResults, setSearchResults] = useState([]);

      const handleSearch = async () => {
            try {
                  const response = await fetch(`http://localhost:5000/colleges/search/${encodeURIComponent(searchTerm)}`);
                  const data = await response.json();
                  setSearchResults(data);
            } catch (error) {
                  console.error('Error fetching data:', error);
            }



      };


      const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                  handleSearch();
            }
      }
      useEffect(() => {
            fetch('http://localhost:5000/colleges').then(res => res.json()).then(data => {
                  setSearchResults(data)
            })
      }, [])

      // console.log(searchTerm);
      // console.log(searchResults);
      return (
            <div>
                  <h1>This is home</h1>
                  {/* <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter college name"
                  /> */}
                  <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress} // Call handleSearch when Enter key is pressed
                        placeholder="Enter college name"
                  />
                  <button onClick={handleSearch}>Search</button>

                  <ul className='md:grid grid-cols-2 my-8 mx-4'>
                        {searchResults.map((college) => (
                              <div className='my-8 mx-auto ' key={college._id}>
                                    <li className='text-3xl text-slate-500 mb-4' >{college.college_name}</li>
                                    <Parallax className=' rounded-md w-[500px] h-[400px]' bgImage={college.college_image} strength={800} >
                                    </Parallax>
                                    {/* <img className='w-[500px] h-[400px]' src={college.college_image} alt="" /> */}
                                    <div className='md:flex'>
                                          <Link className="btn btn-outline border-b-4 bg-slate-400 w-[100px] my-4" to={`/collegedetails/${college._id}`}>
                                                 Details
                                          </Link>
                                    </div>
                              </div>
                        ))}
                  </ul>

            </div>
      );
};

export default Home;