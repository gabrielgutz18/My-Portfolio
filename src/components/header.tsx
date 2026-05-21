import './header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="/">
        Gabriel
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
