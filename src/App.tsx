import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login,logout } from "./store/authSlice"
import { Footer, Header } from "./components"
import { Outlet } from "react-router-dom"
import logo from "./assets/logo.png"

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [])
  
  if (!loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    )
  }
  // loading state
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute animate-ping rounded-full h-29 w-29 border-t-2 border-b-2 border-blue-500">
      </div>
      <img src={logo} alt="Logo" width={100} height={70} className="right-200 rounded-md" />
    </div>
  )
}

export default App
