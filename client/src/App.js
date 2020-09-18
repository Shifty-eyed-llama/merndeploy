import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'

import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update'
import PetForm from './components/PetForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <PetForm path="/pet/new" />
        <Details path="/pet/:id" />
        <Update path="/pet/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
