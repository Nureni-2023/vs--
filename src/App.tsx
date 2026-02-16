import './App.css'
import './portfolio.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import PlainCanvas from './components/PlainCanvas'

function App() {
  return (
    <div className="app-root">
      <Nav />
      <main className="container">
        <section className="left">
          <Hero />
          <Projects />
        </section>
        <aside className="right">
          <PlainCanvas />
        </aside>
      </main>
      <footer className="site-footer">© Your Name — built with React & Three.js</footer>
    </div>
  )
}

export default App
