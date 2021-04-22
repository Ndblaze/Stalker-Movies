import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Nav, NavbarContainer, Right, Left, NavLogo, MobileIcon,
    SearchIconM , Person, NavMenu, NavItem, Account, Register, Login, Search, SearchIcon, SearchContainer } from './NavbarElements'

const Navbar = ({ SetSearchQuery }) => {
    
    const [input, setInput] = useState('');
        
    const send = () => {
        if (!input) return ;
        SetSearchQuery(input);
        setInput('')
    }
  
    return (
        <>
          <Nav >
             <NavbarContainer>
                <Left>
                    <NavLogo to='/'>
                        Stalker
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                </Left>
                    <SearchContainer>
                        <Search 
                           onChange={(e) => setInput(e.target.value)}
                           value={input}
                           placeholder='search for movies, tv shows, people....'
                        />
                       <LinkR to={'/search/'+ input}> <SearchIcon  onClick={send}/> </LinkR> 
                    </SearchContainer>

                    <NavMenu>
                        <NavItem to='popular' smooth={true} duration={500}>
                            Movies
                        </NavItem>
                        <NavItem to='tvshow' smooth={true} duration={1000}>
                            Series
                        </NavItem>
                        <NavItem>
                            People
                        </NavItem>
                        <NavItem to='footer' smooth={true} duration={1500}>
                            About
                        </NavItem>
                    </NavMenu>

                    <Right>
                         <LinkR to='/search'> <SearchIconM /> </LinkR>
                        <Person />
                        <Account>
                            <Register> 
                                Register
                            </Register>
                            <Login>
                                Login
                            </Login>
                        </Account> 
                   </Right>
              
             </NavbarContainer>
          </Nav>  
        </>
    )
}

export default Navbar
