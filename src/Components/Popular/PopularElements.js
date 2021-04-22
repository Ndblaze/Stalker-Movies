import styled from 'styled-components';


export const PopularDiv = styled.div`
    background: #000;
    padding: 40px;

    @media screen and (max-width: 768px){
      padding: 30px;
    }

    @media screen and (max-width: 600px){
         padding: 20px;    
      }

`

export const PopularContainer = styled.div`
     width : 78%;
     height: 90%;
     margin: 0px auto;

     @media screen and (max-width: 768px){
         width : 100%;    
      }
`

export const PopularHeader = styled.h1`
      color: #fff;

`
export const Hr = styled.hr`
       background: #fff;
    
`

export const PopularMovies = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;

      @media screen and (max-width: 1200px){
            grid-template-columns: 1fr 1fr 1fr 1fr;  
      }

      @media screen and (max-width: 900px){
            grid-template-columns: 1fr 1fr 1fr;  
      }

`
   
export const MoviesContainer = styled.div`
     text-align: center;
     border-radius: 4px;
     margin: 10px;
     color: #fff;
     
`

export const Movies = styled.div`
     border-radius: 4px;
     height: 300px;

     @media screen and (max-width: 768px){
         height: 250px;    
      }

     @media screen and (max-width: 600px){
         height: 200px;    
      }

`

export const Img = styled.img`
      border-radius: 4px;
      width: 100%;
      height: 100%;
`

export const Name = styled.h1`
      margin-top: 10px;
      font-size: 1rem;
      color: #fff;

      @media screen and (max-width: 768px){
            font-size: 0.7rem;    
      }

`






