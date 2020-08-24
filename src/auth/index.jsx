import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

const NotFound = () => <h1>NotFound...!</h1>

export default function Auth() {

    const match = useRouteMatch()
    return <div className="root-auth">
        <Switch>
            <Route exact path={`${match.url}/register`}>
                <Register />
            </Route>
            <Route exact path={`${match.url}/login`}>
                <Login />
            </Route>

            <Route component={NotFound} />
        </Switch>
    </div>
}