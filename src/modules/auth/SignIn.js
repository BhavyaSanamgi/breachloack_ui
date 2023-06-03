import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from '@mui/material';

import toast from 'react-hot-toast'

import authService from '../../services/auth.service';
import { useNavigate, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = async () => {
    await authService.login({
      "email": email
    }).then(()=>{
      toast.success('Otp sent successfully')
      setShowOtpInput(true);
    }).catch((error)=>{
      toast.error(error.response.data.message)
    })
  };

  const handleSubmitOtp = async (event) => {
    event.preventDefault();
    await authService.validateOTP({
      email: email,
      otp: otp
    }).then((response)=>{
      toast.success('Login successfully')
      setShowOtpInput(false);
      localStorage.setItem('accessToken', response.data.access_token)
      setEmail('');
      setOtp('');
      const userDetails = jwt_decode(response.data.access_token)
      const userRole = userDetails?.role
      navigate(userRole === 'STUDENT' ? '/student': '/tutor')
    }).catch((error)=>{
      toast.error(error.response.data.message)
    })
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="xs" style={{ padding: '2rem', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmitOtp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            {showOtpInput && (
              <Grid item xs={12}>
                <TextField
                  label="OTP"
                  fullWidth
                  value={otp}
                  onChange={handleOtpChange}
                />
              </Grid>
            )}
          </Grid>
          {!showOtpInput ? (
            <>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '1rem', height: '50px' }}
                onClick={handleSendOtp}
                disabled={!email}
              >
                Send OTP
              </Button>
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: '1rem' }}
              >
                Don't have an account?{' '}
                <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                  Create Account
                </Link>
              </Typography>
            </>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '1rem', height: '50px' }}
              disabled={!otp}
            >
              Submit OTP
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
