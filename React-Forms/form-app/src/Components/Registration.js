import React from 'react'
import {Grid,Paper,TextField,Button,InputLabel,MenuItem,Select } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema =yup.object({
    name:yup.string().required(),
    email:yup.string().email().required(),
    password: yup.string().required().min(6),
    age:yup.number().min(20).max(80).required(),
    qualification:yup.object()
            .shape({
              id:yup.string()
            .required(),
          })

})
const Registration = () => {
    const paperstyle = { padding: '100px 30px', width: 300, margin: '50px auto' }
    const headerstyle = { margin: '0' }
    const { register, handleSubmit, formState:{ errors } } = useForm({ resolver: yupResolver(schema)});
    
    
    const onSubmit = data => console.log(data);
  return (
    <div className='main-div'>
    <div>
    <Grid>
        <Paper elevation={20} style={paperstyle} >
          <Grid>
            <Grid align="center">
         
              <h2 style={headerstyle}>-Registration-</h2>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth label="Name" type="text" variant="standard" {...register("name")} />
              <p>{errors.name?.message}</p>
              <TextField fullWidth label="E-mail" type="email" variant="standard" {...register("email")} />
              <p>{errors.email?.message}</p>
              <TextField fullWidth label="Password" type="password" variant="standard" {...register("password")} />
              <p>{errors.password?.message}</p>
              <TextField fullWidth label="Age" type="number" variant="standard" {...register("age")} />
              <p>{errors.age?.message}</p>
              <InputLabel id="demo-simple-select-label">Educational Qualification</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Educational Qualification"   >
           <MenuItem value={1} >SSLC</MenuItem>
          <MenuItem value={2}>PLUS2</MenuItem>
          <MenuItem value={3}>degree</MenuItem>
          <MenuItem value={4} >PG</MenuItem>
        </Select>
<div>
<Button type='submit' color='primary'>Sign up!</Button>
</div>
              
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
    </div>
  )
}

export default Registration