import './skill.css'
import LogoLoop from './LogoLoop'
import {
  SiCanva,
  SiCss,
  SiGithub,
  SiGodaddy,
  SiGooglegemini,
  SiHtml5,
  SiOpenai,
  SiPython,
  SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const techLogos = [
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiCanva />, title: 'Canva', href: 'https://www.canva.com' },
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss />, title: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiGodaddy />, title: 'GoDaddy', href: 'https://www.godaddy.com' },
  { node: <SiGooglegemini />, title: 'Gemini', href: 'https://gemini.google.com' },
  { node: <SiOpenai />, title: 'Codex', href: 'https://openai.com/codex' },
  { node: <VscVscode />, title: 'VS Code', href: 'https://code.visualstudio.com' },
]

function Skill() {
  return (
    <section className="skill" id="skills">
      <div className="skill-logo-loop">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#f5f7fb"
          ariaLabel="Technology skills"
        />
      </div>
      <h1 className="skill-title">My skills</h1>
    </section>
  )
}

export default Skill
