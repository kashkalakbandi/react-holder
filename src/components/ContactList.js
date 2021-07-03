import React,{useEffect,useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import firebase from '../utils/firebase';
 import DeleteIcon from '@material-ui/icons/Delete';
 import ContactsIcon from '@material-ui/icons/Call';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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


// deletion handler
const deletionHandler = (e)=>{
console.log(e.target.parentElement.id);
const contactFromDB = firebase.database().ref("Contacts");

// sort all children by the phone and check if something is equal to the target value 
contactFromDB.orderByChild("phone").equalTo(e.target.parentElement.id).on('value',(snapshot)=>{
snapshot.forEach((childsnapshot)=>{
// console.log(childsnapshot.key);
//  key is found on childsnapshot key.
// get the reference and then remove it
childsnapshot.ref.remove();

});
});

}

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
        (contact)=>(<ListItem>
            
          <DeleteIcon id={contact.phone} onClick={deletionHandler}/> &nbsp;&nbsp;&nbsp;
       
          <ListItemText key={contact.phone} primary={contact.name} secondary={'Contact :'+contact.email+' , '+contact.phone}  /></ListItem>
          
          )): ''}
        </List>
      </div>
    );
}

export default ContactList;