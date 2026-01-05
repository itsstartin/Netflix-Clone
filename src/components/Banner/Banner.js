import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'
function Banner() {
  const [banner,setBanner]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      console.log(responce.data.results[0])
      setBanner(responce.data.results[0])


    })
  },[])
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>{banner ? banner.name :""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h1>

            
        </div>
        <div className="fade_bottom">

        </div>
      
    </div>
  )
}
export default Banner
