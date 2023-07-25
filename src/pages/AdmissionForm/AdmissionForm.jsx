import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AdmissionForm = () => {
      const { _id, college_name, admission_process, admission_date, events, research_history, sports_details, college_image } = useLoaderData();
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [subject, setSubject] = useState('');
      const [address, setAddress] = useState('');
      const [dateOfBirth, setDateOfBirth] = useState('');
      const [image, setImage] = useState(null);
      const [emailError, setEmailError] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            if (!name || !email || !phone || !subject || !address || !dateOfBirth || !image) {
                  alert('Please fill in all fields');
                  return;
            }

            if (!validateEmail(email)) {
                  setEmailError('Please enter a valid email address');
                  return;
            }

            // Handle form submission logic here
            const userData = {
                  name: name,
                  email: email,
                  phone: phone,
                  subject: subject,
                  address: address,
                  dateOfBirth: dateOfBirth,
                  image: image,
                  college: `${college_name}`
            };
            console.log(userData);
            // Perform any further actions with the form data (e.g., submit to backend)



            fetch('https://college-server-tofail-ahmed.vercel.app/users', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(userData),
            })
                  .then(res => {
                        console.log(res);
                        if (res.status === 200) {
                              alert('user added succesfully')
                        }
                  })




            // Reset form fields
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setAddress('');
            setDateOfBirth('');
            setImage(null);
            setEmailError('');
      };

      const validateEmail = (email) => {
            // Simple email validation using regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
      };

      return (
            <div>
                  <h1>{college_name}</h1>
                  <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-12">
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Candidate Name
                              </label>
                              <input
                                    type="text"
                                    id="name"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="Enter candidate name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Candidate Email
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    className={`appearance-none border ${emailError ? 'border-red-500' : 'border-gray-300'
                                          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
                                    placeholder="Enter candidate email"
                                    value={email}
                                    onChange={(e) => {
                                          setEmail(e.target.value);
                                          setEmailError('');
                                    }}
                                    required
                              />
                              {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                        </div>
                        <div className="mb-4">
                              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                    Candidate Phone Number
                              </label>
                              <input
                                    type="tel"
                                    id="phone"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="Enter candidate phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                                    Subject
                              </label>
                              <input
                                    type="text"
                                    id="subject"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="Enter subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                    Address
                              </label>
                              <input
                                    type="text"
                                    id="address"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="Enter address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
                                    Date of Birth
                              </label>
                              <input
                                    type="date"
                                    id="dateOfBirth"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                                    Image
                              </label>
                              <input
                                    type="text"
                                    id="image"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    value={image}
                                    placeholder="Enter Image URL"
                                    onChange={(e) => setImage(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="flex items-center justify-center">
                              <button
                                    type="submit"
                                    className="btn btn-outline border-b-4 bg-slate-400 w-[150px] my-4"
                              >
                                    Submit
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default AdmissionForm;
