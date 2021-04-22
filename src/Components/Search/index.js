import React, {useState, useEffect} from 'react'
import { Container, Navblank, MoviesResults, SeriesResults, Movies, MoviesContainer, Content,MName, Img} from './SearchElements'
import axios from 'axios';
import defaultImg from '../images/default_title_poster.jpg';

const Query = ({Name}) => {

   const [movies, setMovies] = useState([]);
   const [series, setSeries] = useState([]);
   
    const SearchesMovies = async () => {
        const { data }  = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${Name}&page=1&include_adult=false`
          );  
          setMovies(data.results)
    }

    const SearchesSeries = async () => {
        const { data }  = await axios.get(
            `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${Name}&page=1&include_adult=false`
          );  
          setSeries(data.results)
    }

    useEffect(() => {
        SearchesMovies();
        SearchesSeries();
    }, [Name])

    function SearchMovies (items){
          const img = `https://image.tmdb.org/t/p/w1280/${items.poster_path}`;

         return (
            <MoviesContainer key={items.id}>
                <Movies>
                    <Img src={img ? img : defaultImg }/>
                </Movies>
                <MName>
                    {items.title}
                </MName>
            </MoviesContainer>
         );

    }

    return (
        <Container>
            <Navblank></Navblank>
            <Content>
               <h3 style={{color: '#fff'}}> Search for : { Name }</h3>
               <h1 style={{color: '#fff', marginTop: '20px'}}>Movies</h1>
                <MoviesResults>
                    {movies.map(SearchMovies)}
                </MoviesResults>
                <h1 style={{color: '#fff', marginTop: '20px'}}>Series</h1>
                <SeriesResults>
                     {series.map(SearchMovies)}
                </SeriesResults>
            </Content>
        </Container>
    )
}

export default Query
