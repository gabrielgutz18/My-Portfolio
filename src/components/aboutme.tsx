import './aboutme.css'

const AboutMe = () => {
  return (
    <>
     <section className ="aboutme" id ="aboutme">
        <h1 className ="about-title">About Me</h1>
        <h2 className="about-tagline">"I started by untangling cables. Now I build the systems behind them."</h2>
        <div className="about-content">
          <p>I'm Gabriel — a fresh Computer Engineering graduate who spent his last year doing just about everything IT-related: setting up servers, wiring networks, troubleshooting hardware, designing a website, and even building a drone that uses AI to find missing people.</p>
          <p>My journey into tech wasn't a straight line. I picked up web development on the side because I genuinely enjoy making things look and work well — from a live company portfolio to graphics made in Canva. At the same time, I was deep in the infrastructure side: deploying TrueNAS storage servers, configuring Tailscale VPN, crimping LAN cables, and being the person colleagues call when something breaks.</p>
          <p>My thesis pushed me further — a multi-function drone system powered by YOLOv8 AI for real-time detection during search-and-rescue operations. It's the kind of project that blends hardware, software, and actual impact.</p>
          <p className="skills-summary">I'm the kind of person who learns by doing, figures things out independently, and doesn't stop until it works. Git, NAS, drones, websites — I pick up whatever the job needs.</p>
        </div>
     </section>
    </>
  )
}

export default AboutMe
