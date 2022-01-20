import {Button ,Typography ,Grid ,Radio,FormControl,FormLabel,RadioGroup,Box, Checkbox,FormGroup,FormControlLabel} from "@material-ui/core"
import {InputLabel,Select,MenuItem,Switch,TextField} from "@material-ui/core"
import React from "react"
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles({
  headStyles:{
    fontFamily:"oblique"
  },
  checkStyles:{
    color:"black"
  },
  btnStyle:{
    textAlign:'center'
  }
})

function App() {
  const classes = useStyles()
  const [age, setAge] = React.useState('');

  const[formData,setFormData] = React.useState({
    firstName:"",
    middleName:"",
    lastName:"",
    location:"",
    password:"",
    email:"",
    age :"",
    isEnjoyed:false,
    gender:""
  })

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  function handleChange(event){
    const{name , value , type , checked } = event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==="toggle"?checked:value
      }
    })
  }
  function handleSubmit(event){
    console.log("data submitted")
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div >
       <Typography align = "center"variant="h2" className={classes.headStyles}>Registration</Typography>
        <hr/>
    <form onSubmit={handleSubmit}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div>
    <TextField name = "firstName" value = {formData.firstName} onChange = {handleChange} id="outlined-basic" label="FirstName" variant="outlined" />
    <TextField name = "middleName" value = {formData.middleName} onChange = {handleChange} id="outlined-basic" label="MiddleName" variant="outlined" />
    <TextField name = "lastName" value = {formData.lastName} onChange = {handleChange}id="outlined-basic" label="LastName" variant="outlined" />
    <TextField name = "location" value = {formData.location} onChange = {handleChange} id="outlined-basic" label="Location" variant="outlined" />
    <TextField name = "password" value = {formData.password} onChange = {handleChange} id="outlined-basic" type = "password" label="Password" variant="outlined" />
    <TextField name = "email" value = {formData.email} onChange = {handleChange} id="outlined-basic" type = "email" label="Email" variant="outlined" />
    </div>

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
    defaultValue="male"
    name="radio-buttons-group"
    >
    <FormControlLabel type = "radio" name = "gender" onChange = {handleChange} value="female" control={<Radio />} label="Female" />
    <FormControlLabel type = "radio" name = "gender"onChange = {handleChange}value="male" control={<Radio />} label="Male" />
    <FormControlLabel type = "radio" name = "gender" onChange = {handleChange} value="other" control={<Radio />} label="Other" />
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
    value={formData.age}
    name = "age"
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={30}>30</MenuItem>
  </Select>
</FormControl>
   </Box>

     <hr/>
    <Typography>4)Have you enjoyed the session?</Typography>

    <Switch></Switch>
    <hr/>
     <div className={classes.btnStyle}>
      <button>Submit</button>
     </div>
    </form>
    </div>
  );
}

export default App;
