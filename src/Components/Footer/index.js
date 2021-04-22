import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa';
import {FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
     FooterLinkItems,
    FooterLinksWrapper, 
    FooterLinkTitle, 
     FooterLink, 
     SocialIconLink, 
     SocialIcons, 
     SocialLogo, 
     SocialMedia, 
     WebsitRights, 
     SocialMediaWrap} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
          <FooterContainer id='footer'>
              <FooterWrap>
                  <FooterLinksContainer>
                      <FooterLinksWrapper>
                          <FooterLinkItems>
                              <FooterLinkTitle> About us</FooterLinkTitle> 
                                  <FooterLink to="/signin">How it works</FooterLink>
                                  <FooterLink to="/signin">Testimonials</FooterLink>
                                  <FooterLink to="/signin">Careers</FooterLink>
                                  <FooterLink to="/signin">Investors</FooterLink>
                                  <FooterLink to="/signin">Terms of service</FooterLink>
                          </FooterLinkItems>
                          <FooterLinkItems>
                              <FooterLinkTitle> Contact us</FooterLinkTitle> 
                                  <FooterLink to="/">Contact</FooterLink>
                                  <FooterLink to="/">Support</FooterLink>
                                  <FooterLink to="/">Destination</FooterLink>
                                  <FooterLink to="/">Sponsorships</FooterLink>
                          </FooterLinkItems>
                      </FooterLinksWrapper>
                      <FooterLinksWrapper>
                          <FooterLinkItems>
                              <FooterLinkTitle> Videos </FooterLinkTitle> 
                                  <FooterLink to="/">Submit Video</FooterLink>
                                  <FooterLink to="/">Ambassadors</FooterLink>
                                  <FooterLink to="/">Agency</FooterLink>
                                  <FooterLink to="/">Influencer</FooterLink>
                          </FooterLinkItems>
                          <FooterLinkItems>
                              <FooterLinkTitle> Social Media</FooterLinkTitle> 
                                  <FooterLink to="/">Instagram</FooterLink>
                                  <FooterLink to="/">Facebook</FooterLink>
                                  <FooterLink to="/">Twitter</FooterLink>
                                  <FooterLink to="/">LinkedIn</FooterLink>
                                  <FooterLink to="/">YouTube</FooterLink>
                          </FooterLinkItems>
                      </FooterLinksWrapper>
                  </FooterLinksContainer>
                  <SocialMedia>
                      <SocialMediaWrap>
                          <SocialLogo to='/' onClick={toggleHome}> Stalker </SocialLogo>
                          <WebsitRights> Stalker @ {new Date().getFullYear()}   
                              All rights reserved.</WebsitRights>

                           <SocialIcons>
                               <SocialIconLink herf='/' target='_blank' aria-lable='Facebook'>
                                   <FaFacebook />
                               </SocialIconLink>
                               <SocialIconLink herf='/' target='_blank' aria-lable='Instagram'>
                                   <FaInstagram />
                               </SocialIconLink>
                               <SocialIconLink herf='//www.twitter.com' target='_blank' aria-lable='Twitter'>
                                   <FaTwitter />
                               </SocialIconLink>
                               <SocialIconLink herf='/' target='_blank' aria-lable='Linkedin'>
                                   <FaLinkedin />
                               </SocialIconLink>
                               <SocialIconLink herf='/' target='_blank' aria-lable='YouTube'>
                                   <FaYoutube />
                               </SocialIconLink>

                           </SocialIcons>   
                      </SocialMediaWrap>
                  </SocialMedia>
              </FooterWrap>
          </FooterContainer>   
        </>
    )
}

export default Footer

