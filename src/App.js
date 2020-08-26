import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './auth';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <DashBoard />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
