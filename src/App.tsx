import React from 'react'
import './App.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Userinfo } from './Pages/Userinfo'
import { ProtectRouteV2 } from './Components/ProtectRoute'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <ProtectRouteV2 exact path="/info" component={Userinfo} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
