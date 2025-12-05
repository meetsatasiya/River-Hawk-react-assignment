import { useDispatch, useSelector } from 'react-redux'
import { login as loginAction, logout as logoutAction } from '../store/AuthSlice'
import type { AppDispatch, RootState } from '../store/Index'


export const useAuth = () => {
const dispatch = useDispatch<AppDispatch>()
const auth = useSelector((s: RootState) => s.auth)


const login = (token: string) => dispatch(loginAction(token))
const logout = () => dispatch(logoutAction())


return { auth, login, logout }
}