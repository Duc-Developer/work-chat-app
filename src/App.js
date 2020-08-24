import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
