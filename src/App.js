// import logo from './logo.svg';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

    
  }
   const toggleMode=()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark Mode";

      // setInterval(()=>{
      //    document.title="TextUtils is Amazing Mode";
      // },2000);
      // setInterval(()=>{
      //    document.title="Install TextUtils Now";
      // },1800);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "info");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
     <Navbar title="TextUtils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
      </Routes>
     </Router> 
    </>
  );
}

export default App;
