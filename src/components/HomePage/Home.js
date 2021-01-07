import React from 'react'
import '../Css/Hero.css' 

function Home() {
  return (
    <div className='hero-container'>
      <h1 className='hero-text'>
        hi,<br/>{" i'm" } 
        <span className='myName'> tapiwa, <br/></span>
        web developer
      </h1>
      <span className='herotext-mobile'>
        hi,{"i'm" } <span className='myName'>tapiwa,</span>web developer
      </span>
      <span className='skillHighlight'>CSS/Javascript/React/Python</span>
      <a href="mailto:tchipatikoyahoo.com"><button className='contactme-btn'>contact me</button></a>
    </div>
  )
}

export default Home
