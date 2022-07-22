import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useUserAuth } from '../context/userAuthenticationContext';
import Alert from '@mui/material/Alert';

const paperstyle = { padding: '50px 20px', width: 300, margin: '20px auto' }
const headerstyle = { margin: '0' }
const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(' ')
  const [error, setError] = useState('')
  const { SignUp } = useUserAuth()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await SignUp(email, password)
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperstyle} >
          <Grid>
            <Grid align="center">
              <Avatar>
                <AddCircleOutlineIcon />
              </Avatar>
              <h2 style={headerstyle}>SignUp</h2>
              {error && <Alert severity="error">{error}</Alert>}
            </Grid>
            <form onSubmit={handleSubmit}>
              <TextField fullWidth label="E-mail" type="email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
              <TextField fullWidth label="Password" type="password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
              <Button type='submit' color='primary'>Sign up!</Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default SignUp