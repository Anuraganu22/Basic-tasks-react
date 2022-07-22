import React from 'react'
import { Grid, Paper, TextField, Button, InputLabel, MenuItem, Select ,Typography,Box,} from '@material-ui/core'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
  first_Name: string
  Last_Name: string
  job: boolean
  role: string,
  current_job:string,
}
const schema = yup.object({
  first_Name: yup.string().required("First Name is Required"),
  Last_Name: yup.string().required("Last Name is reuired"),
  current_job: yup.string().required("Enter your Job"),
   role: yup.string().required("Enter your role "),
   job:yup.boolean().required("Please select any option").nullable(),
   
}).required();

export default function FormFile() {
  const paperstyle = { padding: '100px 30px', width: 600, margin: '50px auto' }
  const headerstyle = { margin: '0' }
  const { register,watch, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  console.log(register,"!!!!!@##$$")
  const watchJob = watch("job",false); 
  console.log(watchJob,"WATCH JOB IS")
  const onSubmit = (data: IFormInputs) =>{
    alert(JSON.stringify("Successfully Validated"));
  }
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className='main-div'>
      <div>
        <>
        <Paper elevation={20} style={paperstyle} >
        <Box px={3} py={2}>
        <h1>--Form Validation--</h1>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstname"
                //name="username"
                label="first Name"
                fullWidth
                margin="dense"
                {...register('first_Name')}
                error={errors.first_Name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.first_Name?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="LastName"
                label="Last Name"
                fullWidth
                margin="dense"
                {...register('Last_Name')}
                error={errors.Last_Name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.Last_Name?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="demo-simple-select-standard-label">Do you have Job ?</InputLabel>
                    <Select {...register("job")}  error={errors.job ? true : false}>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
               </Select>
               <Typography variant="inherit" color="textSecondary">
               {errors.job?.message}
              </Typography>
              </Grid>
              {watchJob && (   
          <>
         <Grid item xs={12} sm={6}>
             <TextField
                 required
                 id="Job"
                 label="Job"
                 fullWidth
                 margin="dense"
                 {...register('current_job')}
                 error={errors.current_job ? true : false}
               />
               <Typography variant="inherit" color="textSecondary">
                 {errors.current_job?.message}
               </Typography>
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField
                 required
                 id="role"
                 label="role"
                 fullWidth
                 margin="dense"
                 {...register('role')}
                 error={errors.role ? true : false}
               />
               <Typography variant="inherit" color="textSecondary">
                 {errors.role?.message}
               </Typography>
             </Grid>
          </>
        )}
          </Grid>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
            Submit 
            </Button>
          </Box>
        </Box>
      </Paper>
        </>
      </div>
    </div>
  );
}
