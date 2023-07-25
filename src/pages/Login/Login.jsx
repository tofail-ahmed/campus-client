import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
      const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
      const pageTitle = 'Kiddo_Valley-Login';

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate()
      const location = useLocation()
      console.log(location)

      const from = location.state?.from?.pathname || '/'


      const handleLogin = (e) => {
            e.preventDefault();

            // Log the values in the console

            console.log('Email:', email);
            console.log('Password:', password);


            // Reset the form

            setEmail('');
            setPassword('');


            signIn(email,password)
            .then(result=>{
                  console.log(result.user);
                 
                  navigate(from, { replace: true })
            })
            .then(error=>{
                  console.log(error.message);
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
                  <div className="flex items-center justify-center min-h-screen bg-transparent">
                        <div className="bg-white w-[500px] shadow-md rounded-md p-8">
                              <h2 className="text-2xl font-bold mb-4">Login</h2>
                              <form onSubmit={handleLogin}>

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


                                    <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">Login</button>

                              </form>
                              <p>Haven't any account?<Link className='text-blue-700 font-bold' to={'/signup'}>SignUp</Link></p>
                        <div>
                              <div>
                                    <button onClick={handleGoogleSignIn} className="btn  btn-info my-4 gap-4"><FaGoogle></FaGoogle>  Google SIgnIn</button>
                              </div>
                              <div>
                                    <button onClick={handleGithubSignIn} className="btn  btn-info text-parimary gap-4"><FaGithub ></FaGithub>  Github SIgnIn</button>
                              </div>
                        </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;