import './App.css';
import React,{useState}  from 'react';
import './utils/firebase.js';
import { Button,TextField } from '@material-ui/core';
 import firebase  from './utils/firebase';
import ContactList from "./components/ContactList";


function App() {

const [name, setName] = useState('');
const [email, setemail] = useState('');
const [phone, setphone] = useState('');

// Method handles the change in any input and based on the id, It assigns the value to the useState variables
const handleInputChange=(e)=>{
if(e.target.id === 'name-outlined-basic')
{
  setName(e.target.value);
  console.log(e.target.value);
}else if(e.target.id === 'email-outlined-basic')
{
  setemail(e.target.value);
  console.log(e.target.value);
}else{
  setphone(e.target.value);
  console.log(e.target.value);
}
};

// Method pushes the form data to firebase
const handleSubmit=(e)=>{
  

const contactsRef = firebase.database().ref('Contacts');
const contact = {name,email,phone};

contactsRef.push(contact);

  e.preventDefault();
}
  
return (
<div className="App">

<h1>Contact App</h1>

<TextField id="name-outlined-basic" label="Name" variant="outlined" onChange={handleInputChange} value={name}/>
<TextField id="email-outlined-basic" label="Email" variant="outlined" onChange={handleInputChange}  value={email}/>
<TextField id="contact-outlined-basic" label="Contact" variant="outlined" onChange={handleInputChange}  value={phone}/>


<br></br>

<Button variant="contained" color="primary" onClick={handleSubmit} >
  Save Contact
</Button>
<br></br>
<br></br>
<br></br>
<ContactList />

</div>
);
}

export default App;
