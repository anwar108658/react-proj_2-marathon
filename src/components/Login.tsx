import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login as StoreLog } from '../store/authSlice'
import Input from './Input'
import Button from './Button'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState(null)

    const login = async (data:any) => {
        setError(null)
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(StoreLog(userData));
                    navigate("/")
                }
            }
        } catch (error:any) {
            setError(error.message)
        }
    }
return (
    <div className='flex items-center justify-center w-full '>
        <div>
            <span>
                logo
            </span>
        </div>
        <h2>Sign in to your account?</h2>
        <div>
            <p>Don't have any account?</p>
            <Link to={"/signup"}>
                Sign Up
            </Link>
            {error && <p>{error}</p>}
        </div>
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                label="Email: "
                placeholder="Enter your Email"
                type="email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPattern:(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                        "Please enter a valid email address",
                    }
                })}
                />
                <Input 
                label="password : "
                placeholder="Enter your Email"
                type="password"
                {...register("password",{
                    required:true,
                })}
                />
                <Button type="submit" className="w-full" >Sign in</Button>
            </div>
        </form>
    </div>
)
}

export default Login