import React, { useState } from 'react';
import CourseList from './CoursesList';
import Navbar from '../../components/navbar';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Course 1', description: 'Course 1 description', price: 10, isAddedToCart: false },
    { id: 2, title: 'Course 2', description: 'Course 2 description', price: 20, isAddedToCart: false },
    { id: 3, title: 'Course 3', description: 'Course 3 description', price: 15, isAddedToCart: false },
    { id: 1, title: 'Course 1', description: 'Course 1 description', price: 10, isAddedToCart: false },
    { id: 2, title: 'Course 2', description: 'Course 2 description', price: 20, isAddedToCart: false },
    { id: 3, title: 'Course 3', description: 'Course 3 description', price: 15, isAddedToCart: false },
    { id: 1, title: 'Course 1', description: 'Course 1 description', price: 10, isAddedToCart: false },
    { id: 2, title: 'Course 2', description: 'Course 2 description', price: 20, isAddedToCart: false },
    { id: 3, title: 'Course 3', description: 'Course 3 description', price: 15, isAddedToCart: false },
  ]);

  const handleAddToCart = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, isAddedToCart: true } : course
      )
    );
  };

  const handleRemoveFromCart = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, isAddedToCart: false } : course
      )
    );
  };

  return (
    <div>
      <Navbar />
      <h2>Available Courses</h2>
      <CourseList
        courses={courses}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default StudentDashboard;
