import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import logoImg from '../asset/logo.jpg'
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Wishlist from "./Wishlist";

const Navbar = ({ isLoggedIn, setIsLoggedIn, Name, setName }) => {
  const logout = () => {
    toast.error("log out")
    setIsLoggedIn(false);
    setName("Guest");
  }

  const { cart } = useSelector((state) => state)

  return (
    <nav className="flex justify-between items-center h-20 max-w-8xl mx-auto">

      {/* logo */}
      <NavLink to="/">
        <div className="ml-5">
          <img className="h-[70px] rounded-full border-2 border-white" src={logoImg} alt="cart" />
        </div>
      </NavLink>

      <div className="text-white font-bold text-3xl tracking-wide uppercase">
        <p>{Name}</p>
      </div>


      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        {/*  home  */}
        <NavLink to="/">
          <p>
            Home
          </p>
        </NavLink>

        {
          isLoggedIn && <NavLink to="/contact">contact</NavLink>
        }

        <NavLink to="/about">About</NavLink>


        {/* WishList */}
        <Wishlist />

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {
              cart.length > 0
              && <span className="absolute -top-1 -right-2  bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
            }
          </div>
        </NavLink>

        {/* button log in and sign   */}
        {
          isLoggedIn ?
            (
              <div className="flex gap-5 border rounded-full p-2 px-8">
                <NavLink to="/" className="uppercase" > <button onClick={logout}>log out</button></NavLink>
              </div>
            ) :
            (
              <div className="flex gap-5 border rounded-full p-2 px-8">
                <NavLink to="/login"> <button>LogIn</button></NavLink>
                <p>/</p>
                <NavLink to="/signup"> <button>SignUp</button></NavLink>
              </div>
            )
        }

      </div>
    </nav>
  )
};

export default Navbar;
