import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type { RootState } from "../store/store"


export default function Protected({children,authentication=true}:any) {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const authStatus = useSelector((state: RootState) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }else if(!authentication && authStatus){
            navigate("/")
        }
        setLoading(false)
    }, [authStatus,navigate,authentication])
    
    return loading ? <h1>loading</h1> : <>{children}</>
}