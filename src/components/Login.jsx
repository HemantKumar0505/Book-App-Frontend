import React from 'react'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const[message, setMessage] = useState("")
  const {loginUser,signInWithGoogle} = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
      try {
        await loginUser(data.email, data.password)
        alert("User Login successful")
        navigate("/")
      } catch (error) {
        setMessage("please provide a valid email and password")
        console.error(error)
        
      }
  }

    const handleGoogleSignIn = async () => {
        try {
          await signInWithGoogle()
          alert("User Login successful")
          navigate("/")
        } catch (error) {
          alert(" Google Sign In failed!!")
          console.error( error)
        }
    }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
        <div className='w-full max-w-sm mx-auto bg-yellow-200 shadow-md p-8 pt-6 pb-8 mb-4  rounded-lg'>
            <h2 className='text-xl font-semibold mb-4 '>Please Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input 
                    {...register("email", { required: true })}
                    type='email' name='email' id='email' placeholder=' xyz123@gamil.com' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus-shadow bg-blue-100 '/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input 
                    {...register("password", { required: true })}
                    type='password' name='password' id='password' placeholder=' Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus-shadow bg-blue-100'/>
                </div>
                {
                  message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>Login</button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven't an account? Please <Link to="/register" className='text-blue-500 hover:text-blue-700'>Register</Link></p>

            {/* google sign in */}
            <div className='mt-4'>
                <button 
                onClick={handleGoogleSignIn}
                className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary shadow-md hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none'>
                    <FaGoogle className='mr-2'/>
                    <span className='text-sm'> Sign in with Google</span>
                </button>
            </div>

            <p className='mt-5 text-center text-gray-500 text-xs'>2025 Book Store. All rights reserved</p>
        </div>
    </div>
  )
}

export default Login


