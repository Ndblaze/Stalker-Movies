import axios from 'axios';


const fetchGernes = async () => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}`
    );

    return data.genres;
}

export const frontDisplay = async () => {
    const { data }  = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_APIKEY}`
      );
      
    const genres = await fetchGernes();

     const modifiedData = data.results.map((m) => ({
          id: m.id,
          vote_average: m.vote_average,
          backdrop_path: m.backdrop_path,
          original_title: m.original_title,
          overview: m.overview,
         // genre_ids: getGenre(m.genre_ids)         
                  
     }));

     return modifiedData;

}

