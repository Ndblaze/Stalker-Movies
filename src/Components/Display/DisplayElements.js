import styled from 'styled-components';
import { FaRegPlayCircle, FaStar} from 'react-icons/fa';
import defaultImg from '../images/default_title_poster.jpg';


export const Car = styled.div`
    background-image: url(${({img}) => (img ? img : defaultImg)});
    background-size: cover;
    background-position: center;  
    height: 85vh;
`

export const CarContainer = styled.div`
     background: transparent;
     width : 75%;
     height: 70%;
     position: relative;
     top: 70%;
     left: 50%;
     transform: translate(-50%, -50%);
     padding: 20px;
`

export const Star = styled(FaStar)`
      color: #ffc40c;
 
`

export const CarBlur = styled.div`
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
 
`
export const Rating = styled.h1`
    color: #fff;
    font-size: 1rem;

`

export const MovieName = styled.h1`
   color: rgba(255, 255, 255);

   @media screen and (max-width: 768px ){
      font-size: 1.8rem;
    }

`

export const MovieDiscription = styled.p`
   color: rgba(255, 255, 255);

   @media screen and (max-width: 768px ){
      font-size: 0.8rem;
    }

`
export const MovieGerne = styled.h3`
   font-size: bold;
   color: #fff;

`
export const Play = styled(FaRegPlayCircle)`
   margin-right: 10px;
   font-size: 1.8rem;
`

export const TrailerBtn = styled.button`
    width: 200px;
    height: 50px;
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 30px;
    border: none;
    color: #fff;
    background: red;

    @media screen and (max-width: 768px ){
        width: 170px;
        height: 50px;
        font-size: 1rem;
    }
`







