import React from 'react'
import Template from '../components/Template'
// import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'


function LogIn({ setIsLoggedIn }) {

  return (
    <div className='flex justify-center items-start bg-slate-950 h-screen'>
      <Template
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>

  )
}

export default LogIn
