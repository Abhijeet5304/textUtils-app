

import { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/about';
import Textform from './components/textform';
import Alert from './components/Alert';


import React from 'react';






function App() {

  
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  
  
  const showAlert= (message,type) => {
       setAlert({
        msg : message,
        type : type
       })
       setTimeout(() => {
        setAlert(null)
       }, 1500);
  }
  const toggleSwitch = () => {
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode has been enabled','success')
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled','success')
      
    }
  }
  return (
    
    <> 
<Navbar title = "textUtils" mode = {mode} toggleSwitch = {toggleSwitch}/>

<Alert alert={alert}/>

<div className="container my-3" >
    <Textform showAlert = {showAlert} heading = "Enter the text to anylize" mode = {mode}/>
    {/* <About/> */}
    </div>

    </>
  );
}


export default App;
