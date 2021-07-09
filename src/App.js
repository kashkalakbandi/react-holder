import './App.css';
import React,{useEffect,useState}  from 'react';
import Contactform from './components/Contactform';
import Loginform from './components/Loginform';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from './utils/firebase';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

const [isAuthenticated, setisAuthenticated] = useState();
const [isDisabled, setisDisabled] = useState('disabled');

const handleDataPassback=(signinFlag)=>{
setisAuthenticated(signinFlag);
}


const logoutHandler=(event)=>{
  console.log(isAuthenticated);
  if(isAuthenticated)
  {
    // logout the user
    firebase.auth().signOut().then(() => {
      setisAuthenticated(false);
    }).catch((error) => {
      // An error happened.
    });
    
  }else{
    alert("You have to be logged in first to logout.");
  }
}

return (
  <div className="App">

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Contact  App
    </Typography>
    <Button color="inherit" onClick={logoutHandler} >Logout</Button>
  </Toolbar>
</AppBar>

    {/* If the user is authenticated, then show Contactform OR show Login form */}
{isAuthenticated ? (<Contactform/>) :(<Loginform setisAuthenticated={handleDataPassback}/>) }
  </div>

);
}

export default App;
