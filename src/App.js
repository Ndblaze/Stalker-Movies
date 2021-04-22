import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search'
import Navbar from './Components/Navbar'


function App() {
   
  const [searchQuery, SetSearchQuery] = useState('');

  return (
    <Router>
      <Navbar SetSearchQuery={SetSearchQuery}/>
      <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/search/:id" exact> <Search Name={searchQuery}/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
