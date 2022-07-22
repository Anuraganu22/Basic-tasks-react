
import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useUserAuth } from '../context/userAuthenticationContext';
import Alert from '@mui/material/Alert';
const Login = () => {
    const paperstyle = { padding: '50px 20px', width: 300, margin: '20px auto' }
    const headerstyle = { margin: '0' }
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { Login,GoogleAuth } = useUserAuth()

    const handleSubmit= async (e)=>{
        e.preventDefault()
        setError();
        try{
           await Login(email,password)
           
        }
        catch (err){
            setError(err.message)
        }
    }
    const handleGoogleSignIn = async(e)=>{
        e.preventDefault()
        try{
       await GoogleAuth()
        }
        catch(err){
         setError(err.message)
        }
    }
    return (
        <div>
            <Grid align='center'>
                <Paper elevation={20} style={paperstyle}>
                    <Avatar>
                    </Avatar>
                    <h2 style={headerstyle}>Login</h2>
                    {error && <Alert severity="error">{error}</Alert>}
                    {/* {success && <Alert severity="success">login successfully...!</Alert>} */}
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Email" variant="standard" onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField fullWidth label="Password" variant="standard" onChange={(e)=>setPassword(e.target.value)}/>
                        <Button type='submit' color='primary'>Login</Button>
                        <Button type='submit' color='primary'  onClick={handleGoogleSignIn}>Login using google Account</Button>
                        <GoogleIcon />
                    </form>
                </Paper>
            </Grid>

        </div>
    )
}

export default Login