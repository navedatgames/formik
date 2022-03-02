import {Button ,Typography ,Grid ,Radio,FormControl,FormLabel,RadioGroup,Box, Checkbox,FormGroup,FormControlLabel} from "@material-ui/core"
import {InputLabel,Select,MenuItem,Switch,TextField } from "@material-ui/core"
import React from "react"
import {makeStyles} from '@material-ui/core/styles'
import { useFormik } from "formik"
import * as Yup from 'yup'
const useStyles = makeStyles({
  headStyles:{
    fontFamily:"oblique"
  },
  checkStyles:{
    color:"black"
  },
  btnStyle:{
    textAlign:'center'
  },
  error:{
    color:'red',
  }
})

const initialValues = {
  firstName:'',
  middleName:'',
  lastName:'',
  location:'',
  password:'',
  email:'',
  age:'',
  enjoyed:false,
  gender:'',
  games:[],
}
const validationSchema = Yup.object({
  firstName:Yup.string().min(3,"Min 3 characters").required("FirstName required"),
  middleName:Yup.string().min(3,"Min 3 characters").required("MiddleName required"),
  lastName:Yup.string().min(3,"Min 3 characters").required("LastName required"),
  location:Yup.string().required("Location required"),
  password:Yup.string().required("Password required"),
  email:Yup.string().email("Invalid email format").required("Email required")
})
// const validate = values=>{
//   let errors = {}
//   if(!values.firstName){
//     errors.firstName = 'firstname required'
//   }
//   if(!values.middleName){
//     errors.middleName = 'middlename required'
//   }
//   if(!values.lastName){
//     errors.lastName = 'lastname required'
//   }
//   if(!values.location){
//     errors.location = 'location required'
//   }
//   if(!values.password){
//     errors.password = 'password required'
//   }
//   if(!values.age){
//     errors.age = 'Age required'
//   }
//   if(!values.email){
//     errors.email = 'email required'
//   }
//   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = "Invalid email format"
//   }
//   return errors
// }

const onSubmit = values =>{
  console.log("form Data",values)
}
function OldApp() {
  const classes = useStyles()
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  // console.log("form data",formik.values)
  // console.log("Visited fields", formik.touched)
  // console.log("errors",formik.errors)

  return (
    <div >
       <Typography align = "center"variant="h2" className={classes.headStyles}>Registration</Typography>
        <hr/>
        
    <form onSubmit={formik.handleSubmit}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <>
      <div className="container">
          <div className="row">
            <div className="col">
            <TextField name = "firstName"  value = {formik.values.firstName} onBlur = {formik.handleBlur} onChange = {formik.handleChange} id="outlined-basic" label="FirstName" variant="outlined" />
            {formik.touched.firstName && formik.errors.firstName ? <div className={classes.error}>{formik.errors.firstName}</div>:null}
            </div>
            <div className="col"> 
            <TextField name = "middleName" value = {formik.values.middleName}  onBlur = {formik.handleBlur} onChange = {formik.handleChange} id="outlined-basic" label="MiddleName" variant="outlined"  />
            {formik.touched.middleName && formik.errors.middleName ? <div className={classes.error}>{formik.errors.middleName}</div>:null}
            </div>
            <div className="col">
            <TextField name = "lastName" value = {formik.values.lastName} onBlur = {formik.handleBlur} onChange = {formik.handleChange} id="outlined-basic" label="LastName" variant="outlined" />
            {formik.touched.lastName && formik.errors.lastName ? <div className={classes.error}>{formik.errors.lastName}</div>:null}
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col">
            <TextField name = "location" value = {formik.values.location} onBlur = {formik.handleBlur} onChange = {formik.handleChange} id="outlined-basic" label="Location" variant="outlined" />
            {formik.touched.location && formik.errors.location ? <div className={classes.error}>{formik.errors.location}</div>:null}
            </div>
            <div className="col"> 
            <TextField name = "password" value = {formik.values.password} onBlur = {formik.handleBlur} onChange = {formik.handleChange} id="outlined-basic" type = "password" label="Password" variant="outlined" />
            {formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div>:null}
            
            </div>
            <div className="col">
            <TextField name = "email" value = {formik.values.email} onBlur = {formik.handleBlur} onChange = {formik.handleChange} id="outlined-basic" type = "email" label="Email" variant="outlined" />
            {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div>:null}
            </div>
          </div>

        </div>
        </>
    </Box>
    

   
    <hr/>
      <Typography variant="h2" align = "center" className={classes.headStyles} >
        WorkStation
      </Typography>
      <hr/>
      <Typography>1) What are the games you love play?</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox  />} label="Footbal" />
        <FormControlLabel control={<Checkbox  />} label="Cricket" />
         <FormControlLabel control={<Checkbox  />} label="BasketBall" />
      </FormGroup> 
      <hr/>
      <Typography>2) What is your gender?</Typography>
      <FormControl>
      
      <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    >
    <FormControlLabel type = "radio" name = "gender" onChange = {formik.handleChange} value="female" control={<Radio />} label="Female" />
    <FormControlLabel type = "radio" name = "gender"onChange = {formik.handleChange}value="male" control={<Radio />} label="Male" />
    <FormControlLabel type = "radio" name = "gender" onChange = {formik.handleChange} value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    </FormControl>
    <hr/>
    <Typography>3)What is your age?</Typography>

   <Box sx = {{maxWidth:120}}>
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formik.values.age}
    name = "age"
    label="Age"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  >
    
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={30}>30</MenuItem>
  </Select>
  {formik.touched.age && formik.errors.age ? <div className={classes.error}>{formik.errors.age}</div>:null}
</FormControl>
   </Box>

     <hr/>
    <FormControlLabel
      control={
        <Switch
        id = "enjoyed"
        name = "enjoyed"
        onChange={formik.handleChange}
        checked = {formik.values.enjoyed}
        />
      }
      label = "Enjoyed the Session"
      />
   
    <hr/>
     <div className={classes.btnStyle}>
       <Button color = "primary" variant="contained" type = "Submit">Submit</Button>
     </div>
    </form>
    </div>
  );
}

export default OldApp;
