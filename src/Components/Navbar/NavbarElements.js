import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaSearch } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

export const Nav = styled.nav`
    background: transparent;
    position: absolute;
    height: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 10;

`

export const NavbarContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 70px;
     width: 100%;
     padding: 0 20px;

     @media screen and (max-width: 1200px){
       justify-content: space-between;
    }

     
`

export const NavLogo = styled(LinkR)`
     color: #fff;
     justify-self: flex-start;
     cursor: pointer;
     font-size: 2.3rem;
     display: flex;
     align-items: center;
     font-weight: bold;
     text-decoration: none;

     @media screen and (max-width: 768px){
        font-size: 1.8rem;
    }

    @media screen and (max-width: 900px){
        font-size: 2.3rem
     }

`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 900px){
        display: block;
        font-size: 1.2rem;
        margin-left: 20px;
        cursor: pointer;
        color: #fff;
    }

`


export const SearchContainer = styled.div`
     border: 1px solid rgba(255, 255, 255, 0.5);
     border-radius: 4px;
     justify-content: space-between;
     align-items: center;
     display: flex;
     width: 600px;
     margin-right: 20px;
     margin-left: 20px;
     padding: 0 10px;

     @media screen and (max-width: 900px){
        display: none;
     }


`  

export const Search = styled.input`
     background: transparent;
     width: 90%;
     color: #fff;
     height: 40px;
     border: none;
     outline: none; 
`

export const SearchIcon = styled(FaSearch)`
    font-size: 1rem;
    margin-left: 10px;
    color: #fff;
`

export const SearchIconM = styled(FaSearch)`
   display: none;
   color: #fff;

   @media screen and (max-width: 768px){ 
        display: block;
        font-size: 1rem;
        
    }
    @media screen and (max-width: 900px){ 
        font-size: 1.2rem;
        display: block;
    }
   
`

export const Person = styled(BsPerson)`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        font-size: 1.2rem;
        margin-left: 25px;
        color: #fff;
    }
    
`

export const NavMenu = styled.ul `
   display: flex;
   align-items: center;
   justify-content: center;
   list-style: none;
   margin-right: 150px;
   margin-top: 15px;

   @media screen and (max-width: 900px){
        display: none;
    }

    @media screen and (max-width: 1200px){
        margin-right: 90px;
    }

`

export const NavItem = styled(LinkS)`
    font-size: 1rem;
    margin-right: 25px;
    color: #fff;
    font-weight: 500;

    @media screen and (max-width: 1200px){
        font-size: 0.8rem;
        margin-right: 15px;
    }

    &:hover{
        text-decoration: underline;
        color: #fff;
    }

`

export const Right = styled.div`

     @media screen and (max-width: 900px){
        display: flex;
        justify-content: space-between;  
        align-items: center;
     }
`

export const Left = styled.div`

     @media screen and (max-width: 1200px){
        display: flex;
        justify-content: space-between;
        align-items: center;
     }
`

export const Account = styled.div`
    display: flex;
    justify-content: space-between;
    
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
     }

     @media screen and (max-width: 900px){
        margin-left: 20px;
     }

`

export const Register = styled.button`
    color: #fff;
    background: transparent;
    padding: 5px;
     border: none;
     border-radius: 4px;
     width: 70px;
     font-size: 0.9rem;

     &:hover{
        background: rgba(255, 255, 255, 0.1);
     }
`

export const Login = styled.button`
     color: #000;
     background: #fff;
     padding: 5px;
     border: none;
     border-radius: 4px;
     width: 70px;
`





