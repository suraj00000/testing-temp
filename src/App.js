import { useState } from 'react';
import Alret from './Alret.js';
import './App.css';

import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App(props) {

  const [alret, setAlret] = useState(null);

  const showAlret = (message, type) =>{
    setAlret({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlret(null);   
    },1500);
  }

  return (
    <>
    
    <Navbar title='TexTU' mode= 'dark'/>
    <Alret alret={alret}/>
    <TextForm showAlret={showAlret}/>
    
    </>
  );
}

export default App;
