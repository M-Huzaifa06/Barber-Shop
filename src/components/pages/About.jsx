import { Link } from 'react-router-dom'
import { Award, Clock, ShieldCheck, Sparkles, } from 'lucide-react'
import Button from '../common/Button'
import OurStory from '../about/OurStory'
import Features from '../about/Features'
import GroomingCTA from '../about/GroomingCTA'

const values = [
  { icon: Award, title: 'Craft First', text: 'Every appointment starts with the shape, texture, and routine of the person in the chair.' },
  { icon: Clock, title: 'Respect Time', text: 'Online booking, clear durations, and careful scheduling keep the day moving smoothly.' },
  { icon: Sparkles, title: 'Premium Finish', text: 'Hot towels, clean tools, quality product, and mirror-ready styling complete the service.' },
  { icon: ShieldCheck, title: 'Consistent Standards', text: 'Each barber works from the same service principles while bringing their own specialty.' },
]

const About = () => {
  return (
    <div className="bg-paper pt-20">
      <section className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <img
          src="https://images.pexels.com/photos/3993471/pexels-photo-3993471.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Barbershop interior"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/68" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="section-kicker mb-3">Our Story</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">Tradition Meets Precision</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Berger was built for people who want the timeless feel of a real barbershop with the ease and polish of a modern appointment experience.
          </p>
        </div>
      </section>

      <OurStory />

      <Features />

      <GroomingCTA  />

      {/* <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="section-kicker mb-3">About Berger</p>
          <h2 className="section-heading text-black">A sharper chair for every generation.</h2>
          <p className="mt-6 leading-8 text-neutral-700">
            We combine classic techniques with modern grooming expectations: thoughtful consultations, tight execution, reliable appointment timing, and product guidance that makes the cut easier to maintain.
          </p>
          <p className="mt-5 leading-8 text-neutral-700">
            The atmosphere is relaxed but exacting. Whether you need a skin fade, a sculpted beard, a clean scissor cut, or a full service before a big event, the goal is simple: leave looking composed and feeling confident.
          </p>
          <Button as={Link} to="/booking" className="mt-8">
            Book Your Transformation
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="border border-neutral-200 bg-white p-6 shadow-sm">
              <value.icon className="mb-5 size-8 text-gold-600" />
              <h3 className="font-heading text-2xl font-bold uppercase text-black">{value.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}

export default About
