import { useEffect } from 'react'
import Hero from '../home/Hero'
import About from '../home/About'
import Services from '../home/Services'
import Testimonials from '../home/Testimonials'
import Branches from '../home/Branches'
import Staff from '../home/Staff'
import Pricing from '../home/Pricing'
import Contact from '../home/Contact'
import VerticalNav from '../VerticalNav'

const Home = () => {
  useEffect(() => {
    // Preload images or other initialization
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Branches />
      <Staff />
      <Pricing />
      <Contact />
      <VerticalNav />
    </>
  )
}

export default Home
