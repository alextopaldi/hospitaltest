import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navigation } from './components/Navigation';
import { Record } from './components/Record';
import { records } from './data/records';
import { Account } from './pages/Account';
import { Appointment } from './pages/Appointment';

function App() {

  return (
    <div className="wrapper">
      <Navigation/>
      <Routes>
        <Route path='/' element={Account()}></Route>
        <Route path='/appointment' element={Appointment()}></Route>
      </Routes>
    </div>
  );
}

export default App;
