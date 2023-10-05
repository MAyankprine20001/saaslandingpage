import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = ({ isLoggedIn , totalAmount , setTotalAmount}) => {
  const { cart } = useSelector((state) => state);
  const navitage = useNavigate();
  const [quantityArr , setQuantityArr] = useState(new Array(cart.length).fill(1));

   useEffect(() => {
    setTotalAmount(Math.round(cart.reduce((acc, curr,index) => acc + (Math.round((curr.price).split(" ").at(0)) * quantityArr[index]), 0)));
  }, [cart , quantityArr])

  const checkoutHandler = () => {
    if (isLoggedIn) {
      navitage('/checkout')
    } else {
      navitage('/login')
    }
  }

  return (
    <div className="flex justify-center mt-14">
      {
        cart && cart.length > 0 ?
          (
            <div className="flex  mt-16 w-[1000px] mb-10 ">

            {/* this one show the product */}
              <div>
                <div className="flex flex-col items-center justify-center w-[90%]">
                  {
                    cart.map((item, index) => (
                      <CartItem key={item.id} item={item} itemIndex={index} setQuantityArr={setQuantityArr} quantityArr={quantityArr}/>
                    ))
                  }
                </div>
              </div>
              
              {/* this one show the information */}
              <div className="flex  flex-col justify-start  mt-16 w-[65%] gap-y-12 ">
                <div className="flex flex-col gap-4 font-semibold">
                  <div className=" text-green-700 uppercase text-2xl font-bold">your Cart</div>
                  <div className=" text-green-700 uppercase text-6xl"> summary</div>
                  <p><span className="uppercase">total Items : {cart.length}</span></p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="uppercase">total amount: <span className="font-bold">${totalAmount}</span></p>
                  <button
                    onClick={checkoutHandler}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                  >Checkout now</button>
                </div>
              </div>

            </div>
          ) :
          (
            <div className="w-screen h-screen flex flex-col justify-center items-center">
              <h1
                className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl"
              >cart</h1>
              <NavLink to="/">
                <button
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  shop now
                </button>
              </NavLink>
            </div>
          )
      }
    </div>

  )
};

export default Cart;
