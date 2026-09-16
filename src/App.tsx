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
            <main className="min-h-screen bg-gray-800 p-10"> <div className="mx-auto max-w-6xl"> <h1 className="mb-6 text-5xl font-bold text-white"> Welcome to My Website </h1> <p className="mb-10 max-w-2xl text-lg text-white/70"> This is temporary content to test your glassmorphism and backdrop blur effects. The colorful background will be visible through the transparent footer cards. </p> <div className="grid gap-6 md:grid-cols-3"> <div className="rounded-2xl bg-white/10 p-8 text-white backdrop-blur-md"> <h2 className="mb-3 text-2xl font-bold">Card One</h2> <p className="text-white/70"> Some temporary content here. </p> </div> <div className="rounded-2xl bg-white/10 p-8 text-white backdrop-blur-md"> <h2 className="mb-3 text-2xl font-bold">Card Two</h2> <p className="text-white/70"> Some temporary content here. </p> </div> <div className="rounded-2xl bg-white/10 p-8 text-white backdrop-blur-md"> <h2 className="mb-3 text-2xl font-bold">Card Three</h2> <p className="text-white/70"> Some temporary content here. </p> </div> </div> </div> </main>
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
