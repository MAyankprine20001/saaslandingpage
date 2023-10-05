import { useEffect, useState } from "react";
import axios from 'axios';
import Product from '../components/Product'
import Search from "../components/Search";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
// import FilterForm from "../components/FilterForm";

const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";  
  const API_URL = "https://itproducts.onrender.com/products";

  const [loading, setLoading] = useState(false)
  // data miantaince
  const [posts, setPosts] = useState([]);
  // search working
  const [searchData, setSearchData] = useState([]);

  const [categoryArray, setCategoryArray] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);

  const [currencyValue, setCurrencyValue] = useState("Dollar");


  async function fetchProductData() {
    setLoading(true);
    try {
      const { data } = await axios?.get(API_URL);//optional chaining
      console.log(data);
      let temp = [];
      let price = 0;
      data.forEach((obj) => {
        let category = obj.category;
        price = Math.max(price, Number((obj.price).split(" ").at(0)));
        !temp.includes(category) && temp.push(category);
      })

      setMaxPrice(Math.ceil(price));
      setPosts(data);
      setSearchData(data);
      setCategoryArray([...temp]);
      console.log("in fetch")
    } catch (error) {
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData();
  }, [])


  return (
    <div className="flex justify-between flex-col">

      {/* filter */}
      {/* <div className="bg-slate-600 text-white p-10 min-w-[15%] min-h-screen fixed left-0">
        <FilterForm categoryArray={categoryArray} maxPrice={maxPrice} posts={posts}  setSearchData={setSearchData}
          setCurrencyValue={setCurrencyValue} currencyValue={currencyValue}
        />
      </div> */}

      {/* mainbody includes card and search */}
      <div className=" w-[100%] " id="CardsBody">

        <div className=" flex flex-col justify-end items-center">
          {/* search */}
          <div className="mt-10 text">
            <Search setSearchData={setSearchData} posts={posts} />
          </div>
          <div class="text-5xl font-extrabold">
            <span class="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent"> Features </span>
          </div>
          {
            loading ?
              (
                //shimmer
                <div className="flex flex-wrap min-w-full max-w-4xl mt-6 gap-4 justify-end">
                  {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1,].map((value, index) => (
                      <div key={index} className="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
                        <div className="flex flex-col flex-1 gap-5 sm:p-2">
                          <div className="flex flex-1 flex-col gap-3">
                            <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                          </div>
                          <div className="mt-auto flex gap-3">
                            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>

              ) :
              (
                //card
                <div>
                  {
                    (searchData && searchData.length > 0) ?
                      (
                        <div className="flex flex-col justify-center items-center">

                          <div className="grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl p-2 mx-auto space-y-10 space-x-5">
                            {
                              searchData.map((post) => (
                                <Product key={post.id} item={post} currencyValue={currencyValue} />
                              ))
                            }
                          </div>
                        </div>

                      ) :
                      (<div className="flex justify-center items-center">No data fround</div>)
                  }
                </div>
              )
          }

        </div>

      </div>
      <Pricing />
      <FAQ />
    </div>
  )
};

export default Home;
