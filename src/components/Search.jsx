import React, { useState } from 'react'

const Search = ({ setSearchData, posts }) => {
    const searchChangeHandler = (event) => {
        const search = event.target.value.trim().toLowerCase();
        console.log(search.length)
        if (search) {
            setSearchData(posts.filter((post) => {
                let category = post.category.toLowerCase().slice(0,search.length);
                console.log(category)
                return category === search
            }))
            // console.log("id ")
        }
        else {
            // console.log("hi")
            setSearchData(posts)
        }
    }
    return (
        <div className="pt-2 relative mx-auto text-gray-600">
            <input
                onChange={searchChangeHandler}
                // value={searchvalue}
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="text" name="search" placeholder="Search" />
        </div>
    )
}

export default Search
