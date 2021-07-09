import React,{useEffect,useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import firebase from '../utils/firebase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

function Loginform(props) {
    const classes = useStyles();

const [email,setemail] = useState();
const [password,setpassword] = useState();
const [isAuthenticated, setisAuthenticated] = useState();


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

const validUsernameAndPassword=(email,password)=>{

// // password validation
// if(password.length < 8 || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
//   return false;
// }
// else{console.log('Validated the form');
// return true;}

return true;

 }

const handleSignIn=(e)=>{
    // console.log(email,password);
    // need to add the login logic
     // validations. This method validates username and password. 
     if(validUsernameAndPassword(email,password))
     {
      //  Email and password are validated. 

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setisAuthenticated(true);
        console.log(isAuthenticated);
        //console.log(userCredential);
        props.setisAuthenticated(isAuthenticated);
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode+' : '+errorMessage);
      });




     }
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
