import {
  Code2,
  Cpu,
  ExternalLink,
  GitBranch,
  Globe2,
  Mail,
  Network,
  Palette,
  Server,
} from 'lucide-react'
import './aboutme.css'

const skills = [
  { label: 'Web dev', Icon: Globe2 },
  { label: 'NAS / Servers', Icon: Server },
  { label: 'Drone AI', Icon: Cpu },
  { label: 'Networking', Icon: Network },
  { label: 'Design', Icon: Palette },
  { label: 'Python / JS', Icon: Code2 },
  { label: 'Git / GitHub', Icon: GitBranch },
]

const stats = [
  { value: '99', label: 'Lighthouse performance score' },
  { value: '4TB', label: 'NAS storage configured' },
  { value: '1', label: 'Live company website deployed' },
]

const builds = [
  {
    title: 'nqstv.net - Live company website',
    description:
      'Full-stack deployment via GitHub Pages, custom domain, EmailJS, Crisp chat, and a 99% Lighthouse score.',
    Icon: Globe2,
    tone: 'neutral',
    href: 'https://nqstv.net',
  },
  {
    title: 'Search-and-rescue drone system',
    description:
      'YOLOv8 AI detection, thermal camera, LiDAR obstacle avoidance, GPS accuracy, and RTH fail-safe.',
    Icon: Cpu,
    tone: 'cool',
  },
  {
    title: 'TrueNAS server + remote access',
    description:
      'ZFS RAID-1 storage, Tailscale VPN, and a 2.5G NIC upgrade for faster transfer speeds.',
    Icon: Server,
    tone: 'warm',
  },
]

const experience = [
  {
    year: '2026',
    title: 'IT Intern - NQSTV, Liliw Laguna',
    description:
      "Deployed the company's live website, configured a TrueNAS NAS server with remote Tailscale VPN access, and handled IT infrastructure including networking and hardware maintenance.",
    active: true,
  },
  {
    year: '2024 - 2026',
    title: 'Thesis - Search-and-Rescue Drone System',
    description:
      'Designed a multi-function drone integrating YOLOv8 AI for real-time detection, thermal imaging, LiDAR obstacle avoidance, GPS tracking, speech broadcast, and RTH fail-safe.',
  },
  {
    year: '2022 - Present',
    title: 'Computer Engineering - PLSP',
    description:
      'Studying CpE with a focus on embedded systems, networking, and software development. Built Arduino projects, and developed hardware-software integrated systems.',
  },
]

const facts = [
  { emoji: '☕', text: 'Fueled by coffee - always one cup too many' },
  { emoji: '🌙', text: 'Loves Coding and Studying Midnight' },
  { emoji: '🎨', text: 'Edits graphics and social media contents' },
  { emoji: '🏃', text: 'Loves Doing Daily Runs, For a Stronger Health' },
  { emoji: '🎮', text: 'Gamer - strategy and immersive worlds' },
  { emoji: '🎵', text: 'Music Enthusiast - from lo-fi beats to rock classics' },
 
]

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme" aria-labelledby="about-heading">
      <p className="about-label">About me</p>

      <div className="about-layout">
        <div className="about-main">
          <h1 className="about-title" id="about-heading">
            Gabriel<span>.</span>
          </h1>

          <blockquote className="about-quote">
            "I started by untangling cables. Now I build the systems behind
            them."
          </blockquote>

          <p className="about-intro">
            Fresh Computer Engineering graduate. I wire networks, build
            websites, configure servers, and fly drones that help find missing
            people.
          </p>

          <div className="badge-row" role="list" aria-label="Skills">
            {skills.map(({ label, Icon }) => (
              <span className="badge" role="listitem" key={label}>
                <Icon aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <hr className="about-divider" />

          <div className="stat-grid" role="list" aria-label="Highlights">
            {stats.map((stat) => (
              <div className="stat-card" role="listitem" key={stat.label}>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="section-title">What I've built</p>
          <ul className="build-list">
            {builds.map(({ title, description, Icon, tone, href }) => (
              <li className="build-item" key={title}>
                <div className={`build-icon build-icon-${tone}`}>
                  <Icon aria-hidden="true" />
                </div>
                <div className="build-text">
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="build-link"
                  >
                    Visit
                    <ExternalLink aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="cta-bar">
            <p>
              <strong>Currently open to opportunities</strong> where I can
              build useful systems and keep learning in the real world.
            </p>
            <a href="#contact" className="cta-btn">
              <Mail aria-hidden="true" />
              Get in touch
            </a>
          </div>
        </div>

        <aside className="about-side" aria-label="Experience and activity">
          <p className="section-title">Experience</p>
          <div className="timeline" role="list" aria-label="Experience timeline">
            {experience.map((item) => (
              <div className="tl-item" role="listitem" key={item.title}>
                <div className="tl-dot">
                  <span className={item.active ? 'active' : ''}></span>
                </div>
                <div className="tl-body">
                  <p className="tl-year">{item.year}</p>
                  <p className="tl-title">{item.title}</p>
                  <p className="tl-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="about-divider" />

          <p className="section-title">Outside the terminal</p>
          <div className="facts-grid" role="list" aria-label="Fun facts">
            {facts.map((fact) => (
              <div className="fact-card" role="listitem" key={fact.text}>
                <div className="fact-emoji">{fact.emoji}</div>
                <p className="fact-text">{fact.text}</p>
              </div>
            ))}
          </div>

          <hr className="about-divider" />

          <p className="section-title">GitHub activity</p>
          <div className="github-wrap">
            <div className="github-cards">
              <img
                src="https://github-readme-stats.vercel.app/api?username=gabrielgutz18&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=111111&icon_color=111111&text_color=374151&ring_color=111111"
                alt="Gabriel's GitHub stats"
                loading="lazy"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default AboutMe
