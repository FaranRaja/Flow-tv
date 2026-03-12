import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {


    const nav = useNavigate()

    const redirect = () => {
        nav('/player')
    }


  return (
    <div className='home'>

        <div className="cover">
            <img src="https://image.discovery.indazn.com/ca/v2/ca/image?id=0dfbef50-2b1f-48e9-8d59-7d726dd2922f&quality=70" alt="" srcset="" className='cover-img' />
            <button className='watch pointer' onClick={redirect}>Watch Live</button>
        </div>
      
    </div>
  )
}

export default Home
