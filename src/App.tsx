import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import heroImage from './images/myself1.png'
import Skill from './components/skill' 
import PixelBlast from './components/PixelBlast'


function App() {
  return (
    <div className="app">
      
    
      <Header/>
      
        <div className="hero-pixel-background" aria-hidden="true">
          <PixelBlast
            variant="square"
            className=""
            style={{}}
            pixelSize={2}
            color="#94a3b8"
            patternScale={1}
            patternDensity={1.3}
            enableRipples
            rippleSpeed={0.3}
            rippleThickness={0.07}
            rippleIntensityScale={0.6}
            speed={0.2}
            transparent
            edgeFade={0.2}
          />
        </div> 
        

        <section className="hero" id="home">
      
          <div className="hero-image">
            <img src={heroImage} alt="Gabriel" />
            <div className="text-content-hero">
              <h1>Welcome to My Portfolio</h1>
              <h2 className="subtitle">I'm Gabriel, a passionate developer.</h2>
              <p>This is a showcase of my projects and skills.</p>
              <a className="contact-button" href="#contact">Contact Me</a>
            </div>
          </div>
      
      </section>
      
      <Skill/>
      <Footer/>
    </div>
  )
}

export default App
