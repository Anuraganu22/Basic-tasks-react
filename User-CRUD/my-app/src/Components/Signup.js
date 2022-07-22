import React, { useState } from 'react'
import { Avatar, Paper, Grid, TextField, Button ,Alert} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Navbar from './Navbar';


const Signup = () => {
    const papperstyle = { padding: '50px 20px', width: 300, margin: '20px auto' }
    const headerstyle = { margin: '0' }
    const [name,setName] =useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const onHandleChange =(e)=>{
        e.preventDefault();
        setError('');
    }

    return (
        <div>
            <Navbar></Navbar>
            <Grid>
                <Paper elevation={20} style={papperstyle} >
                    <Grid>
                        <Grid align="center">
                            <Avatar>
                                <AddCircleOutlineIcon />
                            </Avatar>
                            <h2 style={headerstyle}>SignUp</h2>
                            {error && <Alert>{error}</Alert>}
                        </Grid>
                        <form onSubmit={onHandleChange}>
                            <div>
                                <TextField id="standard-basic" label="Name" variant="standard" onClick={(e)=>setName(e.target.value)}/>
                                <TextField id="standard-basic" label="e-mail" variant="standard" onClick={(e)=>setEmail(e.target.value)} />
                                <TextField id="standard-basic" label="Password" variant="standard" onClick={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div>
                                <Button type='submit' color='primary' variant="text">Sign up!</Button>
                            </div>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup