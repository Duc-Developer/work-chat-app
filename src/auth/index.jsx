import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Register from './Register'

const NotFound = () => <h1>NotFound...!</h1>

export default function Auth() {

    const match = useRouteMatch()
    return <div className="root-auth">
        <Switch>
            <Route exact path={`${match.url}/register`}>
                <Register />
            </Route>

            <Route component={NotFound} />
        </Switch>
    </div>
}