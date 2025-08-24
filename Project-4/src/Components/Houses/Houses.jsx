import React from 'react'
import './Houses.css'
import Card from '../Card/Card'
import village from '../../assets/village1.avif'
import village1 from '../../assets/village2.avif'
import village2 from '../../assets/village3.avif'

import roomnew from '../../assets/roomnew.avif'
import roomnew1 from '../../assets/roomnew1.avif'
import roomnew2 from '../../assets/roomnew2.avif'
import huthouse from '../../assets/huthouse.jpg'
import huthouse1 from '../../assets/huthouse1.jpg'
import huthouse2 from '../../assets/huthouse2.jpg'
import farmhouse from '../../assets/farmhouse2.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse.jpg'
function Houses() {
  return (
    <div id='houses'>
            <Card img1={village} img2={village1} img3={village2} title={"2BHK House in Jhansi"} price={"30,000"} />

      <Card img1={roomnew} img2={roomnew1} img3={roomnew2} title={"1BHK house in Manali"} price={"50,000"} />
      <Card img1={huthouse2} img2={huthouse} img3={huthouse1} title={"1BHK Hut House in Kasol"} price={"70,000"} />
      <Card img1={farmhouse} img2={farmhouse1} img3={farmhouse2} title={"1BHK farmhouse in Lucknow"} price={"60,000"} />
        
    </div>
  )
}

export default Houses