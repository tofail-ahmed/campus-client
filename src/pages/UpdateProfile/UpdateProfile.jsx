
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProfile = () => {
      const { _id, name, email, phone, subject, address, college } = useLoaderData();
      console.log(name, email, phone);

      const handleUpdate = (e) => {
            e.preventDefault();
            const form = e.target;
            const phone = form.phone.value;
            const subject = form.subject.value;
            const address = form.address.value;
            const college = form.college.value;
            const updatedUser = {
                  phone,
                  subject,
                  address,
                  college
            }
            console.log(updatedUser);
            fetch(`http://localhost:5000/user/${_id}`, {
                  method: "PUT",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(updatedUser)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                              alert("Updated successfully")

                        }
                  })


      }


      return (
            <div className='my-12'>
                  {/* <h1>_id: {_id}</h1>
                  <h1>name: {name}</h1>
                  <h1>email: {email}</h1>
                  <h1>phone: {phone}</h1>
                  <h1>subject: {subject}</h1>
                  <h1>address: {address}</h1>
                  <h1>college: {college}</h1> */}

                  <form onSubmit={handleUpdate}>
                        <div className='flex flex-col w-[300px] mx-auto gap-6'>
                              <div className="form-control">
                                    <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
                                    <input type="text" name='phone' defaultValue={phone} className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                                    <input type="text" name='subject' defaultValue={subject} className="input input-bordered" />

                              </div>
                              <div className="form-control">
                                    <label htmlFor="address" className="block font-medium mb-1">Address</label>
                                    <input type="text" name='address' defaultValue={address} className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label htmlFor="college" className="block font-medium mb-1">College</label>
                                    <input type="text" name='college' defaultValue={college} className="input input-bordered" />
                              </div>

                              <input className='btn btn-outline bg-slate-300  border-b-4 my-8 w-[100px]' type="submit" value="Update Data" />
                        </div>



                  </form>
            </div>
      );
};

export default UpdateProfile;
