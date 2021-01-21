import React from 'react'
import { useHistory } from 'react-router-dom'
import { userLogout } from '../Services/CallService'


export const Posts: React.FC = () => {
    const history = useHistory()
    return <div>
        <h1>Post pages</h1>
        <button
            onClick={() => {
                userLogout()
                history.push('/login')
            }} >LogOut</button>
        </div>

}