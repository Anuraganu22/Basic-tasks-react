import React, { useState } from 'react'
import { Avatar,Paper,Grid,TextField ,Button} from '@mui/material';
import Navbar from './Navbar';
import Alert from '@mui/material/Alert';
const Login = () => {
    const papperstyle ={padding: '50px 20px', width: 300, margin: '20px auto'}
    const headerstyle = { margin: '0' }
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState();

    const handleSubmit = (e)=>{
    e.prevantDefault();
    setError('');
    }

  return (
    <div>
        <Navbar/>
        <Grid>
       <Paper elevation={20} style={papperstyle} >
           <Grid>
               <Grid align="center">
                   <h2 style={headerstyle}>Login</h2>
                   {error && <Alert severity="error">{error}</Alert>}
               </Grid>
               <form onSubmit={handleSubmit}>
               <TextField id="standard-basic" label="e-mail" variant="standard" onClick={(e)=>setEmail(e.target.value)}/>
               <TextField id="standard-basic" label="password" variant="standard" onClick={(e)=>setPassword(e.target.value)} />
               <div>
                  <Button variant="text">Login</Button>
                   </div>
               </form>
           </Grid>
       </Paper>
   </Grid>
    </div>
  )
}
export default Login