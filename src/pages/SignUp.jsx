import React from 'react'
import Template from '../components/Template'
function Signup({ setIsLoggedIn , setName}) {
  return (
    <div className='flex justify-center items-start bg-slate-950 h-screen'>
      <Template
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        setName = {setName}
      />
    </div>
  )
}

export default Signup
