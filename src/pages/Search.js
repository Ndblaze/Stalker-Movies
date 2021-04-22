import React, {useState} from 'react'
import Query from '../Components/Search'
//import Navbar from '../Components/Navbar'
const Search = ({Name}) => {
    return (
        <>
          <Query Name={Name} />
        </>
    )
}

export default Search
