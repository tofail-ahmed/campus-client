import React, { useContext } from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";


import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
      const { createUser, updateUserProfile,googleSignIn, githubSignIn} = useContext(AuthContext)


      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [photoUrl, setPhotoUrl] = useState('');

      const handleSignup = (e) => {
            e.preventDefault();

            // Log the values in the console
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            console.log('Photo URL:', photoUrl);

            // Reset the form
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setPhotoUrl('');

            createUser(email,password)
            .then(result=>{
                  const loggedUser=result.user
                  updateUserProfile(name,photoUrl)
                  console.log(loggedUser);
            })
            .then(err=>{
                  console.log(err);
            })
      };
      const handleGoogleSignIn = () => {
            googleSignIn()
                  .then(result => {
                        const loggedUser = result.user
                        console.log(loggedUser);
                  })
                  .catch(error => {
                        console.log(error);
                  })
      }
      const handleGithubSignIn = () => {
            githubSignIn()
                  .then(result => {
                        const loggedUser = result.user
                        console.log(loggedUser);
                  })
                  .catch(error => {
                        console.log(error);
                  })
      }
      

      return (
            <div>

                 
                  <div className="flex items-center justify-center min-h-screen  bg-transparent">
                        <div className="bg-white w-[500px] shadow-md rounded-md p-8">
                              <h2 className="text-2xl font-bold mb-4">Sign up</h2>
                              <form onSubmit={handleSignup}>
                                    <div className="mb-4">
                                          <label htmlFor="name" className="block font-medium mb-1">Name</label>
                                          <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="email" className="block font-medium mb-1">Email</label>
                                          <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="password" className="block font-medium mb-1">Password</label>
                                          <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="confirmPassword" className="block font-medium mb-1">Confirm Password</label>
                                          <input
                                                type="password"
                                                id="confirmPassword"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="photoUrl" className="block font-medium mb-1">Photo URL</label>
                                          <input
                                                type="text"
                                                id="photoUrl"
                                                value={photoUrl}
                                                onChange={(e) => setPhotoUrl(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>
                                    <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">Sign up</button>

                              </form>
                              <p>Already have an account?<Link className='text-blue-700 font-bold' to={'/login'}>Go Login</Link></p>
                              <div>
                                    <button onClick={handleGoogleSignIn} className="btn  btn-info my-4 gap-4"><FaGoogle></FaGoogle>  Google SIgnIn</button>
                              </div>
                              <div>
                                    <button onClick={handleGithubSignIn} className="btn  btn-info text-parimary gap-4"><FaGithub ></FaGithub>  Github SIgnIn</button>
                              </div>
                        </div>
                  </div>
                  </div>

                  )
};

export default SignUp;