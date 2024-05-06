import Navbar from "./component/Navbar"
import TextForm from "./component/TextForm"
import About from "./component/About"
import React, { useState } from "react"
import Alert from "./component/Alert"
import './App.css'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const [mode,setmode] = useState("light")
  const togglemode = ()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.background = "#6499E9"
      showAlert('Dark mode has been enabled','success')
    //   document.title = 'TextUtils - Dark mode'
    //   setInterval(()=>{
    //     document.title = 'TextUtils is Amazing mode'
    //   },2500)
    }
    else{
      setmode("light")
      document.body.style.background = "#EEEEEE"
      showAlert('Light mode has been enabled','success')
    //   document.title = 'TextUtils - Light mode'
    //   setInterval(()=>{
    //     document.title = 'Install TextUtils now'
    //   },2000)
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" About = "About TextUtils" mode = {mode} toggleMode={togglemode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/about" element={ <About mode = {mode}/> } />
        <Route path="/Text" element={ <TextForm heading = "Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} showAlert={showAlert}/> } />
    </Routes>
    </div>
  </>
  )
}

export default App
