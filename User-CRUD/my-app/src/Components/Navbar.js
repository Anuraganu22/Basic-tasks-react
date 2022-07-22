import React from 'react'
import { useNavigate } from 'react-router-dom'; 

//Ui imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Welcome to my App
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/signup")}>SignUp</Button>
          <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar