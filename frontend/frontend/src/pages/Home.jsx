import React from 'react'
import axis from '../imges/axis.webp'

import pic1 from '../imges/pic1.jpg'
import pic2 from '../imges/pic2.jpg'
import pic3 from '../imges/pic3.jpg'
import pic4 from '../imges/pic4.jpg'
import pic5 from '../imges/pic5.jpg'
import pic6 from '../imges/pic6.jpg'

const Home = () => {
  return (
    <div>
      <img src={axis}  />

      <div className='cards'>
          <div className='card'><img src={pic1} alt="" /></div>
          <div className='card'><img src={pic2} alt="" /></div>
          <div className='card'><img src={pic3} alt="" /></div>
          <div className='card'><img src={pic4} alt="" /></div>
          <div className='card'><img src={pic5} alt="" /></div>
          <div className='card'><img src={pic6} alt="" /></div>
      </div>
    </div>
  )
}

export default Home
