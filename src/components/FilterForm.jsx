import React, { useEffect, useState } from 'react'

const FilterForm = ({ categoryArray, maxPrice, posts, setSearchData, setCurrencyValue }) => {

  // console.log(maxPrice)
  // console.log(categoryArray)
  // console.log(posts)

  const [formData, setFormData] = useState({
    category: "All",
    price: Math.ceil(maxPrice),
    rating: 5,
    currency: "Dollar"
  })

  // after load this set the max price
  useEffect(() => {
    setFormData((prev) => (
      {
        ...prev,
        price: Math.ceil(maxPrice)
      }
    ));
  }, [maxPrice])

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => (
      {
        ...prev,
        [name]: value
      }
    ));
  }
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData)
    let filterData = formData.category === "All" ? [...posts] : posts.filter((post) => post.category === formData.category);
    formData.currency === "Dollar" ? 
    filterData = filterData.filter((post) => Number(Math.round((post.price).split(" ").at(0))) <= Number(formData.price)) //case of Dollar 
    :
    filterData = filterData.filter((post) => Number(Math.round((post.price).split(" ").at(0)))*80 <= Number(formData.price)) // case of ruppe

    // console.log(filterData)

    filterData = filterData.filter((post) => Math.ceil(Number((post.rating).split("/").at(0))) <= Number(formData.rating))
    setSearchData([...filterData])
    setCurrencyValue(formData.currency)

  }
  // console.log(formData)
  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset className='flex flex-col items-center mt-10 gap-8 uppercase'>
          <legend className='text-center font-bold text-3xl underline mb-10'>Filter ...</legend>
          {/* cateory drop down */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="category" className='text-xl'>category : </label>
            <select id="category" name='category' value={formData.category} onChange={changeHandler} className='text-black rounded min-w-[150px]'>
              {
                ["All", ...categoryArray].map((value, index) => (
                  <option key={index}>{value}</option>
                ))
              }

            </select>

          </div>

          {/* range --> price*/}
          {/* <div className='flex flex-col gap-2'>
            <label htmlFor="price"> price Range 0 - <span className=' ml-1 px-2 text-slate-100 border p-1 rounded'>{formData.price}</span></label>
            <input id="price" type='range' name='price' value={formData.price} onChange={changeHandler} step={100} min="100" max={maxPrice} />
          </div> */}

          <div className='flex flex-col gap-2'>
            <label htmlFor="price"> price Range 0 - </label>
            <input  className=' text-black p-1 pl-2' id="price" type='number'  min={0} name='price' value={formData.price} onChange={changeHandler} step={1000}/>
          </div>

          {/* range -> rating */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="rating"> rating :  1 - <span className=' ml-1 text-slate-100 border p-1 px-4 rounded'>{formData.rating}</span></label>
            <input id="rating" type='range' min="1" max="5" name="rating" value={formData.rating} onChange={changeHandler} />
          </div>

          {/* dollar to ruppe */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="currency" className='text-xl'>Currency:-</label>
            <select
              id='currency'
              name='currency'
              value={formData.currency}
              onChange={changeHandler}
              className='text-black rounded'
            >
              <option>Ruppes</option>
              <option>Dollar</option>
            </select>
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full'>Sort</button>
        </fieldset>
      </form>
    </div>
  )
}

export default FilterForm
