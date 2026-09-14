import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Services from '../components/Services'
import Turnkey from '../components/Turnkey'
import Process from '../components/Process'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="page-enter">
      <Hero />
      <Projects />
      <About />
      <Services />
<Turnkey />
<Process />
        <CTA />
    </div>
  )
}