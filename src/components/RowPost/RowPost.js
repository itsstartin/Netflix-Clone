import { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {   imageURL } from '../../constants/constants'
function RowPost(props) {
  const [row,setRow]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
    console.log(response.data.results)
    setRow(response.data.results)
  }).catch(err=>{

  })
  },[])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {row.map((obj)=>{
            console.log(imageURL+obj.backdrop_path);
            return <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageURL+obj.backdrop_path}`}/>
            

          })}
            
            
        </div>
      
    </div>
  )
}

export default RowPost
