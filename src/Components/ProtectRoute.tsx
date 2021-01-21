import { prototype } from 'events'
import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { isLogin } from '../Services/CallService'

interface PrivateRouteProps extends RouteProps {
    component: any
}

export const ProtectRouteV1 = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isLogin() ? (

                    <Component {...routeProps} />
                ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: {
                                from: routeProps.location
                            }
                        }} />
                    )
            }
        />
    )

}

export const ProtectRouteV2: React.FC<{
    component: React.FC,
    path: string,
    exact: boolean
}> = (props) => {
    return isLogin() ? (

        <Route path={props.path} exact={props.exact} component={props.component} />
    ) : (
            <Redirect to="/login" />
        )
}


export const ProtectRouteV3 = ({ component, ...rest }: any) => {
    const routeComponent = (props: any) => (
        isLogin()
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/login' }} />
    )

    return <Route {...rest} render={routeComponent} />

}

export const LoginPage = ({ component, ...rest }: any) => {
    const routeComponent = (props: any) => (
        isLogin()
            ? <Redirect to={{ pathname: '/info' }} />
            // : <Route {...rest} render={component} />
            : React.createElement(component, props)
    )

    return <Route {...rest} render={routeComponent} />

}