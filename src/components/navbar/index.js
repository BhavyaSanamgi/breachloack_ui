import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Badge,
} from '@mui/material';
import { AccountCircle as AccountCircleIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useSelector } from "react-redux";
import useRole from '../../hooks/useRole';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const userRole = useRole()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/sign-in');
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: 'white' }}>
          <Link to={userRole==='STUDENT' ? '/student': '/tutor'} style={{textDecoration: 'none', color: 'white'}}>
            Dashboard
          </Link>
          </Typography>
          <div>
          {userRole==='STUDENT' && <IconButton color="inherit" edge="end" sx={{marginRight: '20px'}} onClick={()=>{
              navigate('/cart')
            }}>
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>}
            <IconButton color="inherit" edge="end" onClick={handleMenuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
