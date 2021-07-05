import React,{useEffect,useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import firebase from '../utils/firebase';

import Card from '@material-ui/core/Card';
import '../App.css';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom:'10%'
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

function Loginform() {
    const classes = useStyles();

const [email,setemail] = useState();
const [password,setpassword] = useState();
const [isAuthenticated, setisAuthenticated] = useState(false);


const inputValueChangeHandler=(e)=>{
    if(e.target.id === 'input-email')
    {
        setemail(e.target.value)
    }
    else if(e.target.id === 'input-password')
    {
        setpassword(e.target.value)
    }
}


const handleSignIn=(e)=>{
    console.log(email,password);
    // need to add the login logic
}



return (
<div className="Loginform">
    <Card className="Loginform_Card" title="Login">
    <CardHeader title="Login"></CardHeader>
    <TextField id="input-email" className={classes.root} label="Email Address" variant="outlined" autoFocus required onChange={inputValueChangeHandler}  />
    <TextField id="input-password" className={classes.root} label="Password" variant="outlined" value={password} onChange={inputValueChangeHandler} />
    <Button id="signInButton" variant="contained" className={classes.root} color="primary" href="#contained-buttons" onClick={handleSignIn} >Sign In</Button>
    <p>Don't have an Account ? <span><Button variant="contained" color="primary" href="#contained-buttons" id="signUpButton">Sign Up</Button></span></p>

    </Card>
    
</div>

    );
}

export default Loginform;
