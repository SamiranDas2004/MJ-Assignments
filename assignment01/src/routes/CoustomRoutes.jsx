import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OtpForm from '../components/otpPage/OtpForm';
import CourseList from '../components/CourseLIst/CourseList';
import Batches from '../components/batches/Batches';

function CoustomRoutes() {
  return (
    <>
      <Routes>
        <Route path='/otp-form' element={<OtpForm />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/batches' element={<Batches />} />
        <Route path='*' element={<OtpForm />} /> 
      </Routes>
    </>
  );
}

export default CoustomRoutes;
