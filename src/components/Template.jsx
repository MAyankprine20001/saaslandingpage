import React from 'react'
import SignupForm from './SignupForm'
import LogInForm from './LogInForm'
import { FcGoogle } from "react-icons/fc"


const Template = ({ formtype, setIsLoggedIn , setName }) => {
    return (

        <div className='flex flex-col justify-center items-center w-11/12 max-w-[1160px] py-12 mx-auto  gap-x-12 gap-y-0 mt-1' >
            <div className='text-slate-200 mb-32 uppercase text-center font-bold text-4xl underline underline-offset-8'>
                {
                    formtype === "signup" ?
                        <p>Sign Up </p> : <p> log in </p>
                }
            </div>
            <div className='w-11/12 max-w-[450px]'>
                {
                    formtype === "signup" ?
                        (<SignupForm setIsLoggedIn={setIsLoggedIn} setName={setName}/>) :
                        (<LogInForm setIsLoggedIn={setIsLoggedIn}  />)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>

                    <div className='h-[1px] w-full bg-slate-800 '></div>
                    <p className='bg-slate-800 font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] w-full bg-slate-800 '></div>

                </div>

                <button className='w-full flex justify-center items-center rounded-[8px]
                font-medium text-slate-200 border border-slate-900 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button>
            </div>
        </div>

    )
}

export default Template
