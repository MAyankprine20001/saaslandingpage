import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';


export default function SignupForm({ setIsLoggedIn , setName}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    function submitHandler(event) {
        event.preventDefault();
        if (formData.confirmPassword !== formData.password) {
            toast.error("password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        console.log(accountData);
        let name = `${formData.firstname} ${formData.lastname}`
        setName(name.toUpperCase())
        // setName("name");
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* first and last name */}
                <div className='flex gap-x-5 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-slate-200
                                mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            className='bg-slate-800 rounded-[0.5rem]
                                             text-slate-200 w-full p-[12px]'
                            required
                            type='text'
                            name="firstname"
                            value={formData.firstname}
                            onChange={changeHandler}
                            placeholder='Enter first name'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-slate-200
                                mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            className='bg-slate-800 rounded-[0.5rem]
                                             text-slate-200 w-full p-[12px]'
                            required
                            type='text'
                            name="lastname"
                            value={formData.lastname}
                            onChange={changeHandler}
                            placeholder='Enter last name'
                        />
                    </label>
                </div>

                {/* email addresss */}
                <div className='mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-slate-200
                                mb-1 leading-[1.375rem]'>Email Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            className='bg-slate-800 rounded-[0.5rem]
                                             text-slate-200 w-full p-[12px]'
                            required
                            type='email'
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                        />
                    </label>
                </div>


                {/* create password and confirm password */}
                <div className='flex gap-x-5 mt-[20px]'>
                    <label className='w-full relative' >
                        <p className='text-[0.875rem] text-slate-200
                                mb-1 leading-[1.375rem]'>Create password<sup className='text-pink-200'>*</sup></p>
                        <input
                            className='bg-slate-800 rounded-[0.5rem]
                                             text-slate-200 w-full p-[12px]'
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='password'
                        />
                        <span
                            className='absolute right-3 top-[40px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-slate-200
                                mb-1 leading-[1.375rem]'>confirm password<sup className='text-pink-200'>*</sup></p>
                        <input
                            className='bg-slate-800 rounded-[0.5rem]
                                             text-slate-200 w-full p-[12px]'
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='confirm Password'
                        />
                        <span
                            className='absolute right-3 top-[40px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                </div>
                <button
                    className='bg-yellow-500 rounded-[8px] font-medium
                                 text-slate-800 px-[12px] py-[8px] mt-6 w-full'>
                    create account
                </button>
            </form>

        </div>
    )
}
