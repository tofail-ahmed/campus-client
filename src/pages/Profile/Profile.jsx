import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
      const { user } = useContext(AuthContext)
      console.log(user?.email);
      const [userData, setUserData] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:5000/users/${user?.email}`).then(res => res.json()).then(data => {
                  setUserData(data)
            })
      }, [])
      console.log(userData);

      return (
            <div className='md:flex flex-row-reverse justify-between '>
                  <h1>Edit Info</h1>
                  <div className='md:flex md:w-[600px] mx-auto my-24' >
                        <img className='w-[200px] rounded-xl mx-auto' src={userData?.image} alt="" />
                        <div className='text-center'>
                             
                              <h1 className='text-2xl text-slate-600 font-bold'>Name: {userData?.name}</h1>
                              <h1 className='text-xl text-slate-600 mt-2 font-bold'>Email: {userData?.email}</h1>
                              <h1 className='text-xl text-slate-600 mt-2 font-bold'>College: {userData?.college}</h1>
                              <h1 className='text-xl text-slate-600 mt-2 font-bold'>Subject: {userData?.subject}</h1>
                              <h1 className='text-xl text-slate-600 mt-2 font-bold'>Phone: {userData?.phone}</h1>
                              <h1 className='text-xl text-slate-600 mt-2 font-bold'>Date of Birth: {userData?.dateOfBorth === null ? 'Not found' : userData.dateOfBirth}</h1>
                              <h1 className='text-xl text-slate-600 mt-2 font-bold'>Address: {userData?.address}</h1>
                        </div>

                  </div>

            </div>
      );
};

export default Profile;