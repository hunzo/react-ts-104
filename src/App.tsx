import React from 'react'
import './App.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Userinfo } from './Pages/Userinfo'
import { LoginPage, ProtectRouteV2 } from './Components/ProtectRoute'
import { ProtectRouteV1 } from './Components/ProtectRoute'
import { Posts } from './Pages/Posts'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <LoginPage exact path="/login" component={Login} />
                    <ProtectRouteV1 exact path="/info" component={Userinfo} />
                    <ProtectRouteV2 exact path="/posts" component={Posts} />
                    <Route path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
