import React, { useContext } from 'react'
import './Home.css'

import Card from '../Card/Card'

import house from '../../assets/house.jpg'
import house1 from '../../assets/housekichen.jpg'
import house2 from '../../assets/houseliving.jpg'

import farmhouse from '../../assets/farmhouse2.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse.jpg'

import flat from '../../assets/roomhouse.avif'
import flat1 from '../../assets/roomhouse1.avif'
import flat2 from '../../assets/roomhouse3.avif'

import villa from '../../assets/villa.jpg'
import villa1 from '../../assets/villa1.jpg'
import villa2 from '../../assets/villa3.jpg'

import mountain from '../../assets/mountain.avif'
import mountain1 from '../../assets/mountain1.avif'
import mountain2 from '../../assets/mountain3.avif'

import huthouse from '../../assets/huthouse.jpg'
import huthouse1 from '../../assets/huthouse1.jpg'
import huthouse2 from '../../assets/huthouse2.jpg'

import village from '../../assets/village1.avif'
import village1 from '../../assets/village2.avif'
import village2 from '../../assets/village3.avif'

import room from '../../assets/room.jpg'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'

import old from '../../assets/old.avif'
import old1 from '../../assets/old2.avif'
import old2 from '../../assets/old3.avif'

import roomnew from '../../assets/roomnew.avif'
import roomnew1 from '../../assets/roomnew1.avif'
import roomnew2 from '../../assets/roomnew2.avif'

import hut1 from '../../assets/hut1.avif'
import hut2 from '../../assets/hut2.avif'
import hut3 from '../../assets/hut3.avif'

import ski from '../../assets/ski.avif'
import ski1 from '../../assets/ski1.avif'
import ski2 from '../../assets/ski2.avif'
import { DataContext } from '../Context/UserContext'

function Home() {
  
let {
        title,setTitle,
        addListing,setaddListing,
        addImg1,setaddImg1,
        addImg2,setaddImg2,
        addImg3,setaddImg3,
        price,setprice
    } = useContext(DataContext);
         console.log("at home",title,addImg1, addImg2, addImg3,price);
    
  return (
    
    <div id='home'>
      <Card img1={house} img2={house1} img3={house2} title={"3BHK villa in Jhansi"} price={"40,000"} />
      <Card img1={farmhouse} img2={farmhouse1} img3={farmhouse2} title={"1BHK farmhouse in Lucknow"} price={"60,000"} />
      <Card img1={ski} img2={ski1} img3={ski2} title={"1BHK Modern flat in Jhansi"} price={"60,000"} />
      <Card img1={flat} img2={flat1} img3={flat2} title={"1BHK Modern flat in Jhansi"} price={"30,000"} />

      <Card img1={villa2} img2={villa} img3={villa1} title={"2BHK Modern Villa in Jhansi"} price={"50,000"} />
      <Card img1={mountain} img2={mountain1} img3={mountain2} title={"1BHK House in Manali"} price={"50,000"} />
      <Card img1={huthouse2} img2={huthouse} img3={huthouse1} title={"1BHK Hut House in Kasol"} price={"70,000"} />
      <Card img1={village} img2={village1} img3={village2} title={"2BHK House in Jhansi"} price={"30,000"} />

      <Card img1={room} img2={room1} img3={room2} title={"1BHK Modern flat in Jhansi"} price={"30,000"} />
      <Card img1={old} img2={old1} img3={old2} title={"1BHK flat in Jhansi"} price={"20,000"} />
      <Card img1={roomnew} img2={roomnew1} img3={roomnew2} title={"1BHK house in Manali"} price={"40,000"} />
      <Card img1={hut3} img2={hut1} img3={hut2} title={"1BHK 2ndfloor in Jhansi"} price={"20,000"} />
     
 

      {
        
        addListing?<Card img1={URL.createObjectURL(addImg1)} img2={URL.createObjectURL(addImg2)}  img3={URL.createObjectURL(addImg3)} title={title} price={price} />:null
      }
    
    </div>
  )
}



export default Home