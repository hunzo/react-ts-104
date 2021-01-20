import React from 'react'
import { userLogout } from '../Services/CallService'

export const Userinfo: React.FC = () => {
    
    return (
        <>
            <h1>Userinformation</h1> 
            <div>
                <button onClick={() => {
                    userLogout()
                    
                }}>LogOut</button>
            </div>
        </>
    )
}