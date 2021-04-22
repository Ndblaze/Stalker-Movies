import React from 'react'
import Display from '../Components/Display'
import Footer from '../Components/Footer';
//import Navbar from '../Components/Navbar'
import Popular from '../Components/Popular';
import Tvshows from '../Components/Tvshows';


const Home = () => {
    return (
        <>
          <Display />
          <Popular />
          <Tvshows />
          <Footer />
        </>
    )
}

export default Home
