import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import {  isLogin } from '../Services/CallService'

interface PrivateRouteProps extends RouteProps {
    component: any
}

export const ProtectRouteV1 = (props: PrivateRouteProps) => {
    const { component: Component, ...rest} = props

    return (
        <Route
            {...rest}
            render={(routeProps) => { 
                return <Component {...routeProps} />
                    // <Redirect
                    //     to={{
                    //         pathname: '/login',
                    //         state: {
                    //             from: routeProps.location
                    //         }
                    //     }} />
                

            }} />
    )

}

export const ProtectRouteV2 = ( {component, ...rest}: any) => {
    const routeComponent =(props: any) => (
        React.createElement(component, props)
    )

    return <Route {...rest} render={routeComponent} />

}
