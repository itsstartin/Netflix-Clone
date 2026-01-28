import { useEffect, useState , useRef } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {   API_KEY, imageURL } from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
  const rowRef = useRef(null)
  const handleMouseMove = (e) => {
    if (!rowRef.current) return;
    const {left, width} = rowRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const percent = mouseX / width;
    if(percent > 0.7){
        rowRef.current.scrollLeft += percent * 20;
    }
    else if(percent < 0.3){
      rowRef.current.scrollLeft -= (1 - percent) * 20;
    }
  }
  const [genres,setGenres]=useState([])
  const [activeGenre,setActiveGenre]=useState({})
  const [row,setRow]=useState([])
  const [urlId,setUrlId]=useState('')
    useEffect(()=>{
    axios.get(`/genre/movie/list?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.genres)
      setGenres(response.data.genres)
      setActiveGenre(response.data.genres[0])
    })
  },[])
  const fetchUrl = props.isSmall && activeGenre?.id ?
  // `${props.url}${activeGenre.id}`
  props.url+activeGenre.id
:
  props.url;
  useEffect(()=>{
    // Guard: Only run if activeGenre has an id (prevents running before first useEffect completes)
    if (!activeGenre.id) return;
    
    axios.get(
      fetchUrl
    
    ).then((response)=>{
    console.log(activeGenre.name)
    console.log(response.data.results)
    setRow(response.data.results)
  }).catch(err=>{
      console.log("uncaught error")
  })
  },[activeGenre, fetchUrl])

  
  const opts = {
      height: '390',
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
  return (
    <div className='row'>
      <div className='genre-header' >
         {
          props.isSmall ? 
          genres.map((e)=>{
            if(activeGenre.name !== e.name){
              return <h2 
              className='title-genre'
              onClick={()=>{
                setActiveGenre(e)
                console.log(activeGenre.id)
              }}
              >{e.name}</h2>
            }
            else{
              return <h2 className='activeTitle'>{e.name}</h2>
            }
          })
          
          : <h2 className='activeTitle'>{props.title}</h2>
          
          }
      </div>
        <div className="posters"
        onMouseMove={handleMouseMove}
        ref={rowRef}
        >
          {row.map((obj)=>{
            console.log(imageURL+obj.backdrop_path);
            return <img onClick={()=>handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' 
            src={`${imageURL+obj.backdrop_path}`}/>
            
          })}
        </div>
      {urlId && <YouTube videoId={urlId} opts={opts} />}
    </div>
  )
}

export default RowPost
