import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import State from './components/State';
import Login from './components/Login';
import Function from './components/Function';
import Router from './components/Router';
const App = () => {
  return (
    <div>
       <BrowserRouter>
  <Routes>
    <Route path="/home" element={ <Home /> } />
    <Route path="/dashboard" element={ <Dashboard /> } />
    <Route path="/state" element={ <State /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/router" element={ <Router/> } />
    <Route path="/" element={ <Function /> } />
  </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;
