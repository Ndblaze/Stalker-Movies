import React, {useState, useEffect } from 'react';
import axios from 'axios';
import defaultImg from '../images/default_title_poster.jpg';
import{ PopularDiv,
    PopularContainer, 
    PopularHeader, 
    PopularMovies, 
    Movies, 
    Hr, 
    MoviesContainer, 
    Img, 
    Name, 
    } from './PopularElements';



const Popular = () => {

    const [popular, setPopular] = useState([]);
    const fetchPopular = async () => {
        const { data }  = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
            );
    
            setPopular(data.results);
    }; 
    
    useEffect(() => {
        fetchPopular();
      }, []);

      const TopPopular = popular.filter((movie) => {
        if(movie.vote_average > 6.5){
            return movie ;
        }
    })

    //console.log(TopPopular);

    function newTopPopular (items){
        const img = `https://image.tmdb.org/t/p/w1280/${items.poster_path}`;
      //  console.log(img)
      
         return (
            <MoviesContainer key={items.id}>
                <Movies>
                    <Img src={img ? img : defaultImg}/>
                </Movies>
                <Name>
                    {items.title}
                </Name>
            </MoviesContainer>
         );

    }



    return (
        <>
           <PopularDiv id='popular'>
               
               <PopularContainer>
                    <PopularHeader>
                        Popular Movies 
                    </PopularHeader>
                    <Hr/>
                    <PopularMovies>
                        {TopPopular.slice(0, 10).map(newTopPopular)}
                    </PopularMovies>
               </PopularContainer>
                
           </PopularDiv>   
        </>
    )
}

export default Popular
