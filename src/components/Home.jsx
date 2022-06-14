import React from 'react'
import video from '../video/vid.mp4'


const Home = () => {
  return (
    <div className='Home'> 
    <div className='cover '></div>
        <video src={video} autoPlay loop muted/>    
        <div className="main">
            
        <li>Food</li>
        <li>Confectionary</li>
        <li> Drinks </li>
    </div>
  </div>
  )
}

export default Home