import './App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <section className ="hero">
        <div className = "hero-image">
          <img src="/images/hero.jpg" alt="Hero Image" />
          <div className = "text-content-hero">
          <h1>Welcome to My Portfolio</h1>
          <h2>I'm Gabriel</h2>
          <p>This is a showcase of my projects and skills.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App
