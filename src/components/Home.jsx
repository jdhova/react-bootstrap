import React from 'react'
import video from '../video/vid.mp4'


const Home = () => {
  return (
    <div className='Home'>   
        <video src={video} autoPlay loop muted/>    
  </div>
  )
}

export default Home