import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero" id="about">
      <h1>Hi, I'm Your Name</h1>
      <p className="tagline">Frontend developer — React, Three.js, and modern web</p>
      <div className="hero-actions">
        <a className="btn" href="#projects">See projects</a>
        <a className="btn outline" href="#contact">Contact me</a>
      </div>
    </section>
  )
}

export default Hero
