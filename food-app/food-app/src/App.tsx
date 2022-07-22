import React, { useEffect, useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useGetRecipesMutation } from './services/recipeApi';

function App() {
  const [value,setValue]=useState('');
  const [Query,setQuery]=useState('');
  const [Health,setHealth]=useState('');
  const [show,setShow]=useState(false);
  const [recipe,setRecipe]=useState({});

const [getRecipes,{isLoading,data}] =useGetRecipesMutation();

useEffect(()=>{
  getFoodRecipes();
},[Query,Health])

const getFoodRecipes = async ()=>{
  await getRecipes({  Query,Health});
}

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Food -App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        //  value={value}
       // onChange={(e)=>setValue(e.target.value)}
        />
   
    </Box>
    <Button>Search </Button>
    </div>
    </div>
    
  );
    }

export default App;
