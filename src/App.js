import {
  Button,
  Typography,
  Grid,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import {
  InputLabel,
  Select,
  MenuItem,
  Switch,
  TextField,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form ,Field , ErrorMessage} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
const useStyles = makeStyles({
  headStyles: {
    fontFamily: "oblique",
  },
  checkStyles: {
    color: "black",
  },
  btnStyle: {
    textAlign: "center",
  },
  error: {
    color: "red",
  },
});

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  location: "",
  password: "",
  email: "",
  age: "",
  enjoyed: false,
  gender: "",
  games: [],
  social:{
    github:'',
    heroku:'',
  }
  
};
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Min 3 characters")
    .required("FirstName required"),
  middleName: Yup.string()
    .min(3, "Min 3 characters")
    .required("MiddleName required"),
  lastName: Yup.string()
    .min(3, "Min 3 characters")
    .required("LastName required"),
  location: Yup.string().required("Location required"),
  password: Yup.string().required("Password required"),
  email: Yup.string().email("Invalid email format").required("Email required"),
});
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

const onSubmit = (values) => {
  console.log("form Data", values);
};
function App() {
  const classes = useStyles();
  //Now we will use formik component instead of useFormik
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // })
  // console.log("form data",formik.values)
  // console.log("Visited fields", formik.touched)
  // console.log("errors",formik.errors)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div>
        <Typography align="center" variant="h2" className={classes.headStyles}>
          Registration
        </Typography>
        <hr />

        <Form>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Field
                      name="firstName"
                      id="outlined-basic"
                      label="FirstName"
                      variant="outlined"
                      placeholder = 'Enter firstName'
                      
                    />
                    {/* {formik.touched.firstName && formik.errors.firstName ? (
                      <div className={classes.error}>
                        {formik.errors.firstName}
                      </div>
                    ) : null} */}
                  
                    <ErrorMessage name = 'firstName' component={TextError}/>
                    
                   
                  </div>
                  <div className="col">
                    <Field
                      name="middleName"
                      // value = {formik.values.middleName}
                      // onBlur = {formik.handleBlur}
                      // onChange = {formik.handleChange}
                      //reducing boiler plates
                      id="outlined-basic"
                      label="MiddleName"
                      variant="outlined"
                      placeholder = 'Enter middleName'
                    />
                    <ErrorMessage name = 'middleName' component={TextError} />
                  </div>
                  <div className="col">
                    <Field
                      name="lastName"
                      id="outlined-basic"
                      label="LastName"
                      variant="outlined"
                      placeholder = 'Enter lastName'
                    />
                    <ErrorMessage name = 'lastName' component={TextError}/>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col">
                    <Field
                      name="location"
                      id="outlined-basic"
                      label="Location"
                      variant="outlined"
                      placeholder = 'Enter location'
                    />
                    <ErrorMessage name = 'location' component={TextError}/>
                  </div>
                  <div className="col">
                    <Field
                      name="password"
                      id="outlined-basic"
                      type="password"
                      label="Password"
                      variant="outlined"
                      placeholder = 'Enter password'
                    />
                    <ErrorMessage name = 'password' component={TextError}/>
                  </div>
                  <div className="col">
                    <Field
                      name="email"
                      id="outlined-basic"
                      type="email"
                      label="Email"
                      variant="outlined"
                      placeholder = 'Enter email'
                    />
                   <ErrorMessage name = 'email' component={TextError}/>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <Field
                      name="social.github"
                      id="outlined-basic"
                      label="Github"
                      variant="outlined"
                      placeholder = 'Enter Github profile'
                    />
                  </div>
                  <div className="col">
                    <Field
                      name="social.heroku"
                      id="outlined-basic"
                      variant="outlined"
                      placeholder = 'Enter Heroku profile'
                    />
                  </div>
                </div>
              </div>
            </>
          </Box>

          <hr />
          <Typography
            variant="h2"
            align="center"
            className={classes.headStyles}
          >
            WorkStation
          </Typography>
          <hr />
          <Typography>1) What are the games you love play?</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Footbal" />
            <FormControlLabel control={<Checkbox />} label="Cricket" />
            <FormControlLabel control={<Checkbox />} label="BasketBall" />
          </FormGroup>
          <hr />
          <Typography>2) What is your gender?</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                type="radio"
                name="gender"
                // onChange={formik.handleChange}
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                type="radio"
                name="gender"
                // onChange={formik.handleChange}
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                type="radio"
                name="gender"
                // onChange={formik.handleChange}
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <hr />
          <Typography>3)What is your age?</Typography>

          <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={formik.values.age}
                name="age"
                label="Age"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
              {/* {formik.touched.age && formik.errors.age ? (
                <div className={classes.error}>{formik.errors.age}</div>
              ) : null} */}
            </FormControl>
          </Box>

          <hr />
          <FormControlLabel
            control={
              <Switch
                id="enjoyed"
                name="enjoyed"
                // onChange={formik.handleChange}
                // checked={formik.values.enjoyed}
              />
            }
            label="Enjoyed the Session"
          />

          <hr />
          <div className={classes.btnStyle}>
            <Button color="primary" variant="contained" type="Submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default App;
