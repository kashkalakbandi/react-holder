import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1PRw3PmFHluVpz2rCCrNbysU6aKhyEkE",
  authDomain: "react-holder.firebaseapp.com",
  databaseURL: "https://react-holder-default-rtdb.firebaseio.com",
  projectId: "react-holder",
  storageBucket: "react-holder.appspot.com",
  messagingSenderId: "899130434368",
  appId: "1:899130434368:web:b749f22f816b7f9a9650a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
