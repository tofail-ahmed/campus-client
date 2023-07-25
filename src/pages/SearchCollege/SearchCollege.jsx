import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const SearchCollege = () => {
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
            <div className='text-center'>
                  <h1 className='text-2xl font-semibold my-8 text-slate-400'>Search Your College or Campus here</h1>

                  <input
                  className='px-4 py-2'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress} // Call handleSearch when Enter key is pressed
                        placeholder="Enter college name"
                  />
                  <button className='btn btn-outline border-b-4 ms-4' onClick={handleSearch}>Search</button>
                  <h1 className='text-2xl font-semibold my-4 text-slate-600'>Available Colleges</h1>

                  <ul className='md:grid grid-cols-2 my-8 mx-4'>
                        {searchResults.map((college) => (
                              <div className='my-8 mx-auto ' key={college._id}>
                                    <li className='text-3xl text-slate-500 mb-4' >{college.college_name}</li>
                                    <Parallax className=' rounded-md w-[500px] h-[400px]' bgImage={college.college_image} strength={800} >
                                    </Parallax>
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

export default SearchCollege;
