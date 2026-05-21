import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import heroImage from './images/myself.png'
import Skill from './components/skill' 


function App() {
  return (
    <div className="app">
    
      <Header/>
      <section className ="hero" id="home">
        <div className = "hero-image">
          <img src={heroImage} alt="Gabriel" />
          <div className = "text-content-hero">
          <h1>Welcome to My Portfolio</h1>
          <h2>I'm Gabriel</h2>
          <p>This is a showcase of my projects and skills.</p>
          <a className ="contact-button" href="#contact">Contact Me</a>
          </div>
        </div>
      </section>
      
      <Skill/>
      <Footer/>
    </div>
  )
}

export default App
