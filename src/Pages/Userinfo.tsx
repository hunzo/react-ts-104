import React from 'react'
import { useHistory } from 'react-router-dom'
import { userLogout } from '../Services/CallService'

export const Userinfo: React.FC = () => {
    const history = useHistory() 
    return (
        <>
            <h1>Userinformation</h1> 
            <div>
                <button onClick={() => {
                    userLogout()
                    history.push('/login')
                    
                }}>LogOut</button>
            </div>
        </>
    )
}