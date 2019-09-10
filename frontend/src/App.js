import React from 'react';
import './App.css';
import FormDialog from './FormDialog';

function App() {
  return (
    <div className = 'container'>
    <FormDialog name = 'Jason' id = '1' gender = 'Male'/>
    <FormDialog name = 'Marry' id = '2' gender = 'Female'/>
    <FormDialog name = 'John' id = '3' gender = 'Male'/>
    <FormDialog name = 'Sunny' id = '4' gender = 'Female'/>
    <FormDialog name = 'Frank' id = '5' gender = 'Male'/>
    </div>
  );
}

export default App;