import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/auth"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const LogoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={LogoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn