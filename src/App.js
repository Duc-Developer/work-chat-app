import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './auth';
import DashBoard from './components/DashBoard';

function App() {

  const [isRedirect, setRedirect] = useState(true);

  useEffect(() => {
    let user = localStorage.getItem("userMail");
    !user ? setRedirect(true) : setRedirect(false);
  })
  return (
    <div className="App">
      <BrowserRouter>
        {isRedirect && <Redirect exact to="/auth" />}
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
