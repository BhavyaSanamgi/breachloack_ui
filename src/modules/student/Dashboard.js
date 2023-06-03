import React, { useState, useEffect } from 'react';
import CourseList from './CoursesList';
import Navbar from '../../components/navbar';
import StudentService from '../../services/student.service'

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const getStudentCourses = async () => {
    const response = await StudentService.studentCourses();
    await setCourses(response.data);
  };

  useEffect(() => {
    getStudentCourses()
  }, []);


  return (
    <>
      <Navbar />
      <div style={{margin: '10px'}}>
      <h2>Available Courses</h2>
      <CourseList
        courses={courses}
        isDashboard={true}
      />
      </div>
    </>
  );
};

export default StudentDashboard;
