import React, {useState, useEffect } from 'react';
import axios from 'axios';
import defaultImg from '../images/default_title_poster.jpg';
import{ TvshowDiv, 
    TvshowContainer, 
    TvshowHeader, 
    TvshowMovies, 
    Tvshow, 
    TvshowsContainer,
    Hr,  
    TvshowImg, 
    TvshowName, 
    } from './TvshowElements';



const Tvshows = () => {

    const [tvshow, setTvshow] = useState([]);
    const fetchTvshow = async () => {
        const { data }  = await axios.get(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`
            );
    
            setTvshow(data.results);
    }; 
    
    useEffect(() => {
        fetchTvshow();
      }, []);

      const TopTvshow = tvshow.filter((movie) => {
        if(movie.vote_average > 7){
            return movie ;
        }
    })

    function newTopTvshow (items){
        const img = `https://image.tmdb.org/t/p/w1280/${items.poster_path}`;
      
         return (
            <TvshowsContainer key={items.id}>
                <Tvshow>
                    <TvshowImg src={img ? img : defaultImg}/>
                </Tvshow>
                <TvshowName>
                    {items.original_name}
                </TvshowName>
            </TvshowsContainer>
         );

    }



    return (
        <>
           <TvshowDiv id='tvshow'>
               <TvshowContainer>
                    <TvshowHeader>
                        Tv shows
                    </TvshowHeader>
                    <Hr/>
                    <TvshowMovies>
                        {TopTvshow.slice(0, 10).map(newTopTvshow)}
                    </TvshowMovies>
               </TvshowContainer>    
           </TvshowDiv>   
        </>
    )
}

export default Tvshows
