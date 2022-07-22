   
import React, { useState } from 'react'
import {  Paper,Box ,Typography,Tab,Tabs} from '@mui/material';
import Login from './Login'
import SignUp from './SignUp';

const CombineAuth=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:340,margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
              <Typography component={'span'} variant={'body2'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>

     <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SignUp/>
      </TabPanel>
      </Paper>
      
    )
}

export default CombineAuth;