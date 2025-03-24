import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axis from '../imges/axis.webp'
import pic1 from '../imges/pic1.jpg'
import pic2 from '../imges/pic2.jpg'
import pic3 from '../imges/pic3.jpg'
import pic4 from '../imges/pic4.jpg'
import pic5 from '../imges/pic5.jpg'
import pic6 from '../imges/pic6.jpg'
import URL from '../config'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import sl1 from '../imges/slide1.jpg'
import sl2 from '../imges/slide2.jpg'
import sl3 from '../imges/slide3.jpg'
const Home = () => {
       
         const nav=useNavigate()
           const auth=async()=>{
            let token=localStorage.getItem('token')

             if(token){
               let api=`${URL}/auth`

               await axios.post(api,null,{headers:{'x-token':token}}).then((res)=>{
                console.log(res.data)

                nav('/dash')
               })
             }
           }

           useEffect(()=>{
          auth()
           },[])
  return (
    <div>
    <Carousel>
      <Carousel.Item>
       <img src={sl1} alt="" width="100%" height="70%" />
        <Carousel.Caption>
          <h3>Easy to apply for Loan</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sl2} alt="" width="100%" height="70%" />
        <Carousel.Caption>
          <h3>Online Deposit Facility</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sl3} alt="" width="100%" height="70%" />
        <Carousel.Caption>
          <h3>Best All Over The World</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  <img src={axis} alt=""  width='100%'/>
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
