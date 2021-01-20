import React, { useState } from 'react'
import { userLogin } from '../Services/CallService'

interface UserAuth {
    username: string
    password: string
}

const initUser: UserAuth = {
    username: '',
    password: '',
}

export const Login: React.FC = () => {
    const [user, setUser] = useState(initUser)

    const Authentication = () => {
        userLogin()
        alert(JSON.stringify(user))
    }

    return (
        <>
            <h1>Login Pages</h1>
            { JSON.stringify(user)}
            <form onSubmit={(e) => {
                e.preventDefault()
                Authentication()
            }}>
                    <input
                        placeholder="username"
                        onChange={(e) => {
                            setUser({
                                ...user,
                                username: e.target.value,
                            })
                        }}
                    />
                    <input
                        placeholder="password"
                        onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value,
                            })
                        }}
                    />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
