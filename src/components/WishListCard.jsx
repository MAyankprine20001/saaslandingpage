import React from 'react'


const WishListCard = ({ item }) => {
    return (
        <div className='flex border p-4  flex-col'>
            <img  className='h-[100px] w-[100px] rounded-2xl' src={item.img}/>
            <p>{item.title}</p>
        </div>
    )
}

export default WishListCard
