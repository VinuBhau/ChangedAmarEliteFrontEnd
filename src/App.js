import { useState } from "react";
import "./App.css";
import Chairman from "./components/Chairman";
import Secretary from "./components/Secretary";
import Owner from "./components/Owner";
import Security from "./components/Security";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Information from "./components/Information";
import About from "./components/About";
import LogIn from "./components/LoginPage";
import Test from "./components/Test"; 
import AddFlatOwner from "./components/AddFlatOwner";
import AddEmployee from "./components/Addemployee";
import Financialdata from "./components/Financialdata";
import AddApartmentDetails from "./components/AddApartmentDetails";
import FinancialExpenses from "./components/FinancialExpenses";
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/login' element = {<LogIn/>}/>
      <Route path = '/test' element = {<Test/>}/>
      <Route path = '/adminDashboard' element ={<AdminDashboard/>}/>
      <Route path = '/chairman' element ={<Chairman/>}/>
      <Route path = '/secretary' element ={<Secretary/>}/>
      <Route path = '/owner' element ={<Owner/>}/>
      <Route path = '/security' element ={<Security/>}/>
      <Route path = '/contact' element ={<Contact/>}/>
      <Route path = '/information' element ={<Information/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/add-flat-owner' element ={<AddFlatOwner/>}/>
      <Route path = '/add-employee' element ={<AddEmployee/>}/>
      <Route path = '/financial-year' element ={<Financialdata/>}/>
      <Route path = '/add-apartment' element ={<AddApartmentDetails/>}/>
      <Route path = '/financial-expenses' element ={<FinancialExpenses/>}/> 


    </Routes>

    
    </div>
  );
}

export default App;