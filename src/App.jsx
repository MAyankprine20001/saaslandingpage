import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast';
import LogIn from "./pages/LogIn";
import Signup from "./pages/SignUp";
import { useState } from "react";
import Payment from "./pages/Payment";
import CheckoutPage from "./pages/CheckoutPage";
import Page404 from "./pages/page404";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
  
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Name, setName] = useState("Guest");
  const [totalAmount, setTotalAmount] = useState(0);
  const [priceTopay, setPriceToPay] = useState(0)
  const [checkout, setCheckout] = useState(false)

  return (
    <div className="relative">
      {/* sticky and top-0 and z-index to make it fixed there */}
      <div className="bg-slate-900 sticky  top-0 z-20">
        <Navbar isLoggedIn={isLoggedIn} Name={Name} setName={setName} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} setName={setName} />} />
        <Route path="/checkout" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <CheckoutPage totalAmount={totalAmount} setPriceToPay={setPriceToPay} setCheckout={setCheckout} />
          </PrivateRoute>
        } />
        <Route path="/payment" element={
          <PrivateRoute isLoggedIn={checkout} >
            <Payment priceTopay={priceTopay} />
          </PrivateRoute>
        } />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* // in case of react - hot - toase */}
      <Toaster />
    </div>
  )
};
