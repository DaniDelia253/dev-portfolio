import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation';
import Work from './components/Work'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navigation id='home' />
      <Hero id='hero' />
      <About />
      <Work id='work' />
      <Contact id='contact' />
      <Footer id='footer' />
    </div>
  );
}

export default App;
