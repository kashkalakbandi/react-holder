import React,{useEffect,useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import firebase from '../utils/firebase';


// styling for list items
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    centerdiv: {
      margin:'auto',
      width:'50%',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    }
  }));

function ContactList(){

const [renderList, setrenderList] = useState();  




  useEffect(() => {
    const contactReference = firebase.database().ref("Contacts");
    contactReference.on('value', (snapshot) => {
      const contactsList = snapshot.val();
      const listOfContacts=[];
      for(let id in contactsList){
        listOfContacts.push(contactsList[id]);
      }
      setrenderList(listOfContacts);
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    }); 

    contactReference.on('child_added', (snapshot) => {
      const contactsList = snapshot.val();
      const listOfContacts=[];
      for(let id in contactsList){
        listOfContacts.push(contactsList[id]);
      }
      setrenderList(listOfContacts);
    }, (errorObject) => {
      console.log('The Latest read failed: ' + errorObject.name);
    }); 


  },[]); 


    const classes = useStyles();
    return (
<div className={classes.centerdiv}>
      <List className={classes.root}>
      {renderList ? renderList.map(
        (contact)=>(<ListItem><ListItemText key={contact.id} primary={contact.name} secondary={contact.email} /></ListItem>)): ''}
        </List>
      </div>
    );
}

export default ContactList;