import React from 'react'
import { Grid, Paper, TextField, Button, InputLabel, MenuItem, Select ,Typography,Box,} from '@material-ui/core'
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import moment from "moment";
import * as yup from "yup";

interface IFormInputs {
  name:string,
  voter_Id:boolean,
  dateOfBirth:string,
}
const schema = yup.object().shape({
  name:yup.string().required("First Name is Required"),
  voter_Id:yup.boolean().required("Please select any option").nullable(),
  dateOfBirth: yup
    .string()
    .nullable()
    .test("dateOfBirth", "not Eligible for voter Id ..", function (value) {
      return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
    })
    .required("Please enter your age")
});

export default function NewForm() {
  const [value, setValue] = React.useState<Date | null>(null);
  const paperstyle = { padding: '100px 30px', width: 600, margin: '50px auto' }
  const { register,watch, handleSubmit, control,formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const watchvoter_id = watch("voter_Id",false); 
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
                {...register('name')}
              error={errors.name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.name?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <p>I want Voter Id !</p>
              <Select {...register("voter_Id")}  error={errors.voter_Id ? true : false}>
                <MenuItem value={1}>Yes</MenuItem>
                <MenuItem value={0}>No</MenuItem>
               </Select>
               <Typography variant="inherit" color="textSecondary">
               {errors.voter_Id?.message}
              </Typography>
            </Grid>
            {watchvoter_id && (  
            <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DatePicker
        label="Date of Birth"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) =><TextField id="date" type="date"   {...register('dateOfBirth')}/>}
      />
    </LocalizationProvider>
    <Typography>
    {errors.dateOfBirth?.message}
    </Typography>
 
              </Grid>
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
            </div>
            </div>
       
  );
}
