import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Library from '@mui/icons-material/LocalLibrary';
import Button from '@mui/material/Button';
import auth from './../auth/auth-helper';
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const isActive = (match) => {
    if (match) {
      return { color: '#f57c00' };
    } else {
      return { color: '#fffde7' };
    }
  };

  const isPartActive = (match) => {
    if (match) {
      return {
        color: '#fffde7',
        backgroundColor: '#f57c00',
        marginRight: 10,
      };
    } else {
      return {
        color: '#616161',
        backgroundColor: '#fffde7',
        border: '1px solid #f57c00',
        marginRight: 10,
      };
    }
  };

  return (
    <AppBar position="fixed" style={{ zIndex: 12343455 }}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          MERN Classroom
        </Typography>
        <div>
          <NavLink to="/" end style={isActive}>
            <IconButton aria-label="Home">
              <HomeIcon />
            </IconButton>
          </NavLink>
        </div>
        <div style={{ position: 'relative', right: '10px' }}>
          <span style={{ float: 'right' }}>
            {!auth.isAuthenticated() ? (
              <span>
                <NavLink to="/signup" style={isActive}>
                  <Button>Sign up</Button>
                </NavLink>
                <NavLink to="/signin" style={isActive}>
                  <Button>Sign In</Button>
                </NavLink>
              </span>
            ) : (
              <span>
                {auth.isAuthenticated().user.educator && (
                  <NavLink to="/teach/courses" style={isPartActive}>
                    <Button>
                      <Library /> Teach
                    </Button>
                  </NavLink>
                )}
                <NavLink
                  to={`/user/${auth.isAuthenticated().user._id}`}
                  style={isActive}
                >
                  <Button>My Profile</Button>
                </NavLink>
                <Button
                  color="inherit"
                  onClick={() => {
                    auth.clearJWT(() => navigate('/'));
                  }}
                >
                  Sign out
                </Button>
              </span>
            )}
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
