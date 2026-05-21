import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import heroImage from './images/myself.png'

function App() {
  return (
    <div className="app">
      <Header/>
      <section className ="hero">
        <div className = "hero-image">
          <img src={heroImage} alt="Gabriel" />
          <div className = "text-content-hero">
          <h1>Welcome to My Portfolio</h1>
          <h2>I'm Gabriel</h2>
          <p>This is a showcase of my projects and skills.</p>
          <button className ="contact-button">Contact Me</button>
          </div>
        </div>
      </section>
      <section className ="about">
        <h2>About Me</h2>
        <p>I'm a passionate developer with experience in web development. I love creating innovative solutions and learning new technologies.</p>
      </section>
      <Footer/>
    </div>
  )
}

export default App
