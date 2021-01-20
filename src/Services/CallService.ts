import jwt from 'jsonwebtoken'

export const userLogin = () => {
    localStorage.setItem('token', jwt.sign({ username: 'surapong.n'}, 'secretkey'))
    return true
}

export const userLogout = () => {
    localStorage.clear()
    return false

}

export const isLogin = (): boolean => {
    return localStorage.getItem('token') ? true : false

}