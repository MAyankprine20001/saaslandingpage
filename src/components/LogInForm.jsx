import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';

const LogInForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value

            }
        ))
    }
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true); 
        toast.success("logged in");
        navigate("/");
    }
    return (

        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
            {/* input inside lable is a way to attach them as we do using htmlfor */}
            <label className='w-full'>
                <p
                    className='text-[0.875rem] text-slate-200
                                mb-1 leading-[1.375rem]'
                >Email Address <sup className='text-pink-200'>*</sup></p>
                <input
                    className='bg-slate-800 rounded-[0.5rem]
                    text-slate-200 w-full p-[12px]'
                    required
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='enter your email Address'
                />
            </label>
            <label className='w-full relative'>
                <p
                    className='text-[0.875rem] text-slate-200
                 mb-1 leading-[1.375rem]'
                >
                    Password    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    className='bg-slate-800 rounded-[0.5rem]
                    text-slate-200 w-full p-[12px]'
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Password'
                />

                <span
                    className='absolute right-3 top-[35px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    {/* ml-auto se right shift hoga */}
                    <p className=' w-full max-w-max text-xs mt-1 text-blue-600 ml-auto'> Forgot password</p>
                </Link>
            </label>

            <button className='bg-yellow-500 rounded-[8px] font-medium
                                 text-slate-800 px-[12px] py-[8px] mt-6' >
                Sign in
            </button>

        </form>

    )
}

export default LogInForm
