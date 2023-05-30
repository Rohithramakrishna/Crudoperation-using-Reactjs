import React from 'react'
import Navbar from './Components/navbarcomponent/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import CreateEmp from './Components/employeesComponent/CreateEmp';
import PageNotFound from './Pages/PageNotFound';
import Employee from './Components/employeesComponent/Employee';
import EditEmp from './Components/employeesComponent/EditEmp';

const App = () => {
  return (
   
      <Router>
      <Navbar/>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add_emp' element={<CreateEmp/>}/>
        <Route path='/view-emp/:id' element={<Employee/>} />
        <Route path='/edit-emp/:id' element={<EditEmp/>} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Router>
  
 
  )
}

export default App
