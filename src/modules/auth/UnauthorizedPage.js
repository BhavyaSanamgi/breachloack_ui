import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const UnauthorizedPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/sign-in');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Unauthorized Access
      </Typography>
      <Typography variant="body1" align="center">
        You do not have permission to access this page.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default UnauthorizedPage;
