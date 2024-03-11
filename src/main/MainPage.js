import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Org from "../Orginals/Orginals";
import Nav from '../nav/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {API_Key,imageUrl} from '../Constants/constants'
import {original,action,horrer} from '../urls'


function MainPage() {
  const [movie, setMovie] = useState()
  const [movie1, setMovie1] = useState()
  const [movie2, setMovie2] = useState()

 useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
   console.log(response.data.results[1])  
   setMovie(response.data.results[1])
     setMovie1(response.data.results[0])
     setMovie2(response.data.results[3])
   })
},[])

  return (

    <div>

      <Nav />
      <main>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="featured" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} >
                <h2 class="title">{movie ? movie.title:""}</h2>
                <div class="featured__buttons">
                  <button class="button__play">
                    <i class="fas fa-play"></i>Play
                  </button>
                  <button>My List</button>
                </div>
                <div class="featured__description">
                {movie ? movie.overview:""}
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="featured" style={{backgroundImage:`url(${movie1 ? imageUrl+movie1.backdrop_path:""})`}}>
                <h2 class="title">{movie1 ? movie1.original_title:""}</h2>
                <div class="featured__buttons">
                  <button class="button__play">
                    <i class="fas fa-play"></i>Play
                  </button>
                  <button>My List</button>
                </div>
                <div class="featured__description">
                {movie1 ? movie1.overview:""}
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="featured" style={{backgroundImage:`url(${movie2 ? imageUrl+movie2.backdrop_path:""})`}}>
                <h2 class="title">{movie2 ? movie2.name:""}</h2>
                <div class="featured__buttons">
                  <button class="button__play">
                    <i class="fas fa-play"></i>Play
                  </button>
                  <button>My List</button>
                </div>
                <div class="featured__description">
                {movie2 ? movie2.overview:""}
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
      <div className="sliders">
      
      <Org url={original} title='Netflix Orginals' />
      </div>
      <div className="sliders">
      
      <Org url={action} title='Action' isSmall/>
      </div>
      <div className="sliders">
      
      <Org url={horrer} title='Horrer' isSmall/>
      </div>
      
    </div>

  );
}

export default MainPage;