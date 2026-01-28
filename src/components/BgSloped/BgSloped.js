import React, { useEffect, useState } from 'react'
import './BgSloped.css'
import axios from '../../axios' 
import { imageURL } from '../../constants/constants';
function BgSloped(props) {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        })
});

  // Create array with 4 copies of first 20 movies (80 total elements)
  const moviesToDisplay = Array.from({length: 4}).flatMap(() => 
    movies.slice(0, 20)
  )

  return (
    <div >
    <div className="bg-sloped">
        <div className="posters-grid">
            <div className="poster-item">
                {
                    moviesToDisplay.map((obj, index)=>{
                        return <img 
                            key={index}
                            src={`${imageURL+obj.backdrop_path}`}
                            alt="poster" />
                    })
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default BgSloped