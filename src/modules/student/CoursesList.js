import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { addItem, removeItem } from '../../store/cartSlice';
import { useDispatch, useSelector } from "react-redux";


const CourseList = ({ courses, isDashboard }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items)
  const courseIds = cartItems.map((course) => course.id)

  const addCourseItem = (item) => {
    dispatch(addItem(item));
  };
  const removeCourseItem = (item) => {
    dispatch(removeItem(item));
  };

    return (
      <Grid container spacing={2}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body1">{course.description}</Typography>
                <Typography variant="subtitle1">Price: ${course.price}</Typography>
                {isDashboard && courseIds.includes(course.id) ? (
                  <Button variant="contained" color="secondary" onClick={() => removeCourseItem(course.id)}>
                    Remove from Cart
                  </Button>
                ) : (
                  isDashboard && <Button variant="contained" color="primary" onClick={() => addCourseItem(course)}>
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default CourseList;
  