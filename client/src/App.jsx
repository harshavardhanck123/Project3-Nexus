import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App