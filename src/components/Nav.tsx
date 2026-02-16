import React from 'react'

const Nav: React.FC = () => {
  return (
    <header className="site-nav">
      <div className="brand">Your Name</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Nav
