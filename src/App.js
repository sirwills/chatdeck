import React from 'react'
import HomePage from './pages/HomePage'
import axios from "axios"


const App = () => {
  axios.defaults.baseURL = "http://localhost:6070/api/";
  axios.defaults.withCredentials = true;
  return (
    <div>
      <HomePage/>
    </div>
  )
}

export default App