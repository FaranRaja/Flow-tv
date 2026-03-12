import React from 'react'

import NavComponents from './NavComponents'
import { useNavigate } from 'react-router-dom'

const Nav = () => {


  const nav = useNavigate()

  const redirect = () => {
    nav('/')
  }
  return (
    <div className='nav'>

        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Flow_2021.jpg" alt="" className='logo pointer' onClick={redirect}/>



      <NavComponents />
      
    </div>
  )
}

export default Nav
