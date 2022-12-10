import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';
import CollegeLoginPortal from './CollegeLoginPortal';
import LoginPageStudent from './Login/LoginPageStudent'
import LoginPageStaff from './Login/LoginPageStaff'
import StudentPortal from './Portal/StudentPortal'
import StaffPortal from './Portal/StaffPortal';



const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index element={<CollegeLoginPortal />} />
    
    <Route path='/loginStudent' element={<LoginPageStudent />} />
    <Route path='/loginStudent/studentPortalPage' element={<StudentPortal />} />

    <Route path='/loginStaff' element={<LoginPageStaff />} />
    <Route path='/loginStaff/stafftPortalPage' element={<StaffPortal />} />

  </Route>
))

function App() {
  return (<RouterProvider router={router} />);
}

export default App;