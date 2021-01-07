import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
import About from './components/AboutPage/About'
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/About" component={ About }/>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
