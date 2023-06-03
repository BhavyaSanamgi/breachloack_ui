import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CourseList from './CoursesList';
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../../store/cartSlice'
import Navbar from '../../components/navbar';
import jwt_decode from 'jwt-decode';

import toast from 'react-hot-toast'

import studentService from '../../services/student.service';

const CartPage = () => {
    const accessToken = localStorage.getItem('accessToken')
    const userDetails = jwt_decode(accessToken)
    const userId = userDetails?.user_id
    const navigate = useNavigate();

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const courseIds = cartItems.map((course) => course.id)

    const enrollStudentToCourses = async () => {
      await studentService.enrollStudentCourses({
        user_id: userId,
        course_ids: courseIds
      }).then(()=>{
        toast.success('Enrolled to courses successfully')
        handleClearCart()
        navigate('/student')
      }).catch((error)=>{
        toast.error(error.response.data.message)
      })
    }


    const handleEnrollCourses = () => {
      enrollStudentToCourses()
    };

  return (
    <>
    <Navbar isStudent={true}/>
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" gutterBottom>
        Enroll courses
      </Typography>
      <CourseList
        courses={cartItems}
      />
      <Button variant="contained" color="secondary" sx={{marginRight: '10px'}} onClick={handleClearCart}>
        Clear Courses
      </Button>
      <Button variant="contained" color="primary" onClick={handleEnrollCourses}>
        Enroll in Courses
      </Button>
    </Container></>
  );
};

export default CartPage;
