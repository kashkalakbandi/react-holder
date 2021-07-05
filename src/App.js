import './App.css';
import React,{useEffect,useState}  from 'react';
import Contactform from './components/Contactform';
import Loginform from './components/Loginform';


function App() {

const [isAuthenticated, setisAuthenticated] = useState(false);



return (
  <div className="App">
    {/* If the user is authenticated, then show Contactform OR show Login form */}
{isAuthenticated ? (<Contactform/>) :(<Loginform />) }
  </div>

);
}

export default App;
