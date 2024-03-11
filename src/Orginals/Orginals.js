import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { imageUrl,API_Key} from '../Constants/constants'
import Youtube from 'react-youtube'
function Orginals(props) {
    const [movies, setMovies] = useState([])
    const [urlId,seturlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
      })
   },[])
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_Key}`).then(response=>{
if(response.data.results.length!==0){
seturlId(response.data.results[0])
}else{
  console.log('array not found')
}
    })
  }
  return (
    <div className='orgi'>
      <h2 class="title" >{props.title}</h2>
      <div className="orgin">
      <div class="container">
        <div class="item active" >
        
          <div class="item-desc">
            {movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'small': 'img ' } src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )}
            
          </div>
        </div>
        
      </div>
      </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Orginals