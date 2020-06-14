import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Blog from './Components/Blog/Blog';
import HomePage from './Components/HomePage/HomePage';
import Event from './Components/Event/Event';
import Hackathon from './Components/Hackathon/Hackathon';
import TechMarathon from './Components/TechMarathon/TechMarathon';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact={true} path="/" component={HomePage}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/event" component={Event} />
      <Route path="/hackathon" component={Hackathon} />
      <Route path="/tech-marathon" component={TechMarathon} />
      <Footer />
    </div>
  );
}

export default App;
