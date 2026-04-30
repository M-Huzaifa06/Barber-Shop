import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Sparkles, Timer } from 'lucide-react'
import Button from '../common/Button'

const aboutImage = 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1400'

const highlights = [
  { icon: Award, label: 'Master-trained barbers' },
  { icon: Timer, label: 'On-time appointments' },
  { icon: Sparkles, label: 'Premium grooming products' },
]

const About = () => {
  return (
    <section id="about" className="bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-105 overflow-hidden sm:min-h-140 lg:min-h-170"
        >
          <img
            src={aboutImage}
            alt="Barber finishing a detailed haircut"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-8 left-6 border border-white/20 bg-black/72 p-5 text-white backdrop-blur sm:left-10">
            <p className="font-heading text-4xl font-bold text-gold-500">14+</p>
            <p className="text-sm uppercase tracking-wide">Years refining the craft</p>
          </div>
        </motion.div>

        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-xl"
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="diamond-mark" />
              <span className="section-kicker">About Us</span>
              <span className="diamond-mark" />
            </div>
            <h2 className="section-heading text-black">Welcome to Berger</h2>
            <p className="mt-6 font-display text-xl font-bold leading-relaxed text-gold-600">
              A refined barbershop in the heart of the city, built for clean lines, warm service, and confident finishes.
            </p>
            <p className="mt-6 leading-8 text-neutral-700">
              Step inside for classic barbering shaped by modern style. Our team handles tight fades, detailed scissor work, beard sculpting, hot towel shaves, and event-ready grooming with calm precision.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3 border-l-2 border-gold-500 bg-white px-4 py-3 shadow-sm">
                  <item.icon className="size-5 text-gold-600" />
                  <span className="font-medium text-neutral-800">{item.label}</span>
                </div>
              ))}
            </div>

            <Button as={Link} to="/about" className="mt-9">
              More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
