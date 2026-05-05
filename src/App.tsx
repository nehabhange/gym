import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.gsap-fade-left').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          x: -40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.gsap-fade-right').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          x: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            once: true,
          },
        })
      })

      gsap.to('.hero-bg', {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      ScrollTrigger.refresh()
      document.fonts.ready.then(() => ScrollTrigger.refresh())
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#030305] text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
