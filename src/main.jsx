import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import Colleges from './pages/Colleges/Colleges.jsx';
import Admission from './pages/Admission/Admission.jsx';
import MyCollege from './pages/My-College/MyCollege.jsx';
import CollegeDetails from './pages/CollegeDetails/CollegeDetails.jsx';
import AdmissionForm from './pages/AdmissionForm/AdmissionForm.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/colleges',
        element:<Colleges></Colleges>
      },
      {
        path:'/admission',
        element: <Admission></Admission>
      },
      {
        path:'/mycollege',
        element:<MyCollege></MyCollege>
      },
      {
        path:'/collegedetails/:id',
        element:<CollegeDetails></CollegeDetails>,
        loader: ({ params }) => fetch(`https://college-server-tofail-ahmed.vercel.app/colleges/${params.id}`)
      },
      {
        path:'/admissionForm/:id',
        element:<AdmissionForm></AdmissionForm>,
        loader: ({ params }) => fetch(`https://college-server-tofail-ahmed.vercel.app/colleges/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='md:px-24 bg-slate-300'>
   <RouterProvider router={router} />
   </div>
    </AuthProvider>
  </React.StrictMode>,
)
