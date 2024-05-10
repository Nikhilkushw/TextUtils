import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter, BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </Router> */}
  </React.StrictMode>,
)
