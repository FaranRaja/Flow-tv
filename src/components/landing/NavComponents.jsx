import React from 'react'
import { CircleUser } from 'lucide-react'
import { Search } from 'lucide-react'

const NavComponents = () => {
  return (
    <div className='nav-c'>
      


        <Search className ='search-cion pointer' />

      <CircleUser className='profile-icon pointer'/>

      <h4 className='pointer'>Login</h4>


    </div>
  )
}

export default NavComponents
