import React from 'react'
import Home from './home/Home'
// import Course from './Components/Course'
import Courses from './courses/Courses'
import { Route,Routes } from "react-router-dom"
import Signup from './Components/Signup'
const App = () => {
  return (
    <div>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  )
}

export default App