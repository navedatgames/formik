import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    error :{
        color:'red'
    }
})
const TextError = (props)=>{
    const classes = useStyles();
    return(
        <div className={classes.error}>
            {props.children}
        </div>
    )
}
export default TextError