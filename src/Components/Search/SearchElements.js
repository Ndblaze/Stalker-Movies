import styled from 'styled-components';


export const Container = styled.div`
     background: #000;
`

export const Navblank = styled.div`
     background: #000;
     height: 90px;
     border-bottom: 1px solid gray;
     border-radius: 30px;
`

export const Content = styled.div`
     padding: 40px 100px;

     @media screen and (max-width: 768px){
      padding: 30px;
    }

    @media screen and (max-width: 600px){
         padding: 20px;    
      }
`

export const MoviesResults= styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;

      @media screen and (max-width: 1200px){
            grid-template-columns: 1fr 1fr 1fr 1fr;  
      }

      @media screen and (max-width: 900px){
            grid-template-columns: 1fr 1fr 1fr;  
      }
`

export const SeriesResults= styled.div`
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

export const MName = styled.h1`
      margin-top: 10px;
      font-size: 1rem;
      color: #fff;

      @media screen and (max-width: 768px){
            font-size: 0.7rem;    
      }

`