import React from 'react'

const Projects: React.FC = () => {
  const items = [
    { title: 'Interactive 3D Scene', desc: 'Three.js + React project', link: '#' },
    { title: 'Marketing Site', desc: 'Responsive React site', link: '#' },
  ]

  return (
    <section id="projects" className="projects">
      <h2>Selected Projects</h2>
      <div className="grid">
        {items.map((p) => (
          <article key={p.title} className="card project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="link" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
