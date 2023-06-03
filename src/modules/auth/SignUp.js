import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel, Select, MenuItem
} from '@mui/material';
import toast from 'react-hot-toast';

import authService from '../../services/auth.service';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();
  
    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };
  
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };
  
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };
    const handleBioChange = (event) => {
      setBio(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        'first_name': firstName,
        'last_name': lastName,
        'gender': gender,
        'email': email,
        'phone_number': phoneNumber,
        'role': role,
        'bio': bio
      }
      await authService.signup(data).then(()=>{
        toast.success('Account created successfully')
        navigate('/sign-in')
      }).catch((error)=>{
        toast.error(error.response.data.message)
      })
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Container maxWidth="xs" style={{ padding: '2rem', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
                    <FormControlLabel value="MALE" control={<Radio />} label="Male" />
                    <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
                    <FormControlLabel value="OTHER" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  value={role}
                  onChange={handleRoleChange}
                >
                  <MenuItem value="TUTOR">TUTOR</MenuItem>
                  <MenuItem value="STUDENT">STUDENT</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  fullWidth
                  value={bio}
                  onChange={handleBioChange}
                />
              </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem', height: '50px' }}
          >
            Sign Up
          </Button>
          <Typography
                variant="body2"
                align="center"
                style={{ marginTop: '1rem' }}
              >
                Already have an account?{' '}
                <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                  Sign In
                </Link>
              </Typography>
        </form>
      </Container>
    </div>
  );
};

export default SignupPage;
