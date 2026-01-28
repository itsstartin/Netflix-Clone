import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageURL } from '../../constants/constants'
import YouTube from 'react-youtube'
function Banner() {
  const [banner,setBanner]=useState([])
  const [urlId,setUrlId]=useState('')
  const opts = {
    height: '320',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
};
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
        console.log(response.data)
        setUrlId(response.data.results[0].key)
      }
    }).catch(err=>{
      console.log("uncaught error")
  })
  }
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      // console.log(responce.data.results[0])
      let n = responce.data.results.length;
      const n2 = Math.floor(Math.random() * n); // Generate random number between 0 to n-1
      setBanner(responce.data.results[n2])
      console.log( responce.data.results[n2])

    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${banner ? imageURL+ banner.backdrop_path:""})`}}>
        <div className="content" >
            {
              urlId ?
              <div>
              <button className="youtubeClose"
              onClick={()=>{setUrlId('')}}
              >X</button>
              <YouTube videoId={urlId} opts={opts} />
              </div>
            :
            <div>
            <h1 className='title'>{banner.title ? banner.title : banner.name ? banner.name : ""}</h1>
            <div className="banner_buttons">
                <button className='button'
                onClick={()=>handleMovie(banner.id)}
                >Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{banner ? banner.overview :""}</h1>
            </div>

            }

        </div>
        <div className="fade_bottom">
        

        </div>
        
    </div>
  )
}
export default Banner
