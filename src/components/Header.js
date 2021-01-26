import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/robcohn.png'
import resume from '../assets/docs/Robert_W_Cohn_Resume.pdf'
const Header = () => (
  <header id="header">    
    <div className="inner">
      <div className="image avatar">
        <img src={avatar} alt="" />
      </div>
      <br />
      <a href="/">Home</a> <br/>
      <a href="projects">Projects/Research</a> <br />
      <a href="publications">Publications</a> <br/>
      <a href={resume} download>Resume</a> <br/>


      
    </div>
    <Footer />
  </header>
)

export default Header
