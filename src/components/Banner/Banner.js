import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageURL } from '../../constants/constants'
function Banner() {
  const [banner,setBanner]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      // console.log(responce.data.results[0])
      setBanner(responce.data.results[0])

    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${banner ? imageURL+ banner.backdrop_path:""})`}}>
        <div className="content" >
            <h1 className='title'>{banner ? banner.name :""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{banner ? banner.overview :""}</h1>

            
        </div>
        <div className="fade_bottom">

        </div>
      
    </div>
  )
}
export default Banner
