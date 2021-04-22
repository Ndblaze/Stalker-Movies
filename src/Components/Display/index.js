import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { frontDisplay } from '../Service';


//styled components imports
import { Car, CarContainer,  
    Rating, MovieDiscription, 
    MovieGerne, MovieName, 
    TrailerBtn, Play, Star, CarBlur } from './DisplayElements';

function Display() {

    const [trend, setTrend] = useState([]);

    const fetchTrending = async () => { 
        setTrend(await frontDisplay());
    }; 

    useEffect(() => {
      fetchTrending();
    }, []);


    const TopTrend = trend.filter((movie) => {
        if(movie.vote_average > 6.9){
            return movie ;
        }
    });
    


    function slides (items){
        
        const img = `https://image.tmdb.org/t/p/w1280/${items.backdrop_path}`;
        const RatingStar = <Star/>

    
        return (
            <Carousel.Item interval={2000} key={items.id}>
           <Car img={img}>
               <CarBlur>
              <CarContainer >
                  <Rating>
                     {RatingStar} {items.vote_average}/10
                  </Rating>
                  <MovieName>
                      {items.original_title} {items.original_name}
                  </MovieName>
                  <MovieDiscription>
                       {items.overview}
                  </MovieDiscription>
                  <MovieGerne>
                      {console.log(items.genre_ids)}
                  </MovieGerne>
                  <TrailerBtn>
                       <Play /> Play Now
                  </TrailerBtn>
              </CarContainer>
              </CarBlur>
          </Car>
        </Carousel.Item>
        )
    }

    return (
        <Carousel>
            {TopTrend.map(slides)}
      </Carousel>
    );
  }

export default Display
