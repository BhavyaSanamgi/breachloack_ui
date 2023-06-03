import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';



const CourseList = ({ courses, onAddToCart, onRemoveFromCart }) => {
    return (
      <Grid container spacing={2}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body1">{course.description}</Typography>
                <Typography variant="subtitle1">Price: ${course.price}</Typography>
                {course.isAddedToCart ? (
                  <Button variant="contained" color="secondary" onClick={() => onRemoveFromCart(course.id)}>
                    Remove from Cart
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => onAddToCart(course.id)}>
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
  