import React from 'react';
import { BsFillBagHeartFill } from "react-icons/bs"
import { useSelector } from 'react-redux';
import WishListCard from './WishListCard';
import { AiFillCloseCircle } from 'react-icons/ai'




export default function Wishlist() {
    const { wishlist } = useSelector((state) => state);
    console.log(wishlist);
    const CloseButtonHandler = () => {
        document.querySelector("#wishlistbar").classList.toggle("translate-x-full");
    }
    const clickHandler = () => {
        document.querySelector("#wishlistbar").classList.toggle("translate-x-full");

    }
    return (
        <div className='relative'>
            <div className='relative'>
                <BsFillBagHeartFill className="cursor-pointer text-xl" id="wishbag" onClick={clickHandler} />
            </div>


            {/* translate-x-full --> hide behind the x axis */}
            <div className='fixed top-[5em] right-0 h-screen bg-slate-700 w-72 translate-x-full' id="wishlistbar">
                <div className=' flex gap-16'>
                    <button className='ml-3 text-black' onClick={CloseButtonHandler}><AiFillCloseCircle /></button>
                    <h1 className='text-3xl p-4 underline underline-offset-4'>Wishlist</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-8'> 
                    {
                        wishlist.map((item) => (
                            <WishListCard item={item} />
                        ))
                    }
                </div>
                

            </div>
        </div>
    );
}

