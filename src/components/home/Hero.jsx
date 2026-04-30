import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone, Scissors } from 'lucide-react'
import logo_home from '../../assets/logo_home.png'
import Button from '../common/Button'

const heroImage = 'https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&w=1800'

const Hero = () => {
  return (
    <section id="banner" className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-black via-black/70 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-black via-black/75 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-28 pt-24 text-center sm:px-6 lg:px-8">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mb-8 flex size-24 items-center justify-center border border-gold-500/80 bg-black/50 text-gold-500 backdrop-blur"
        >
          <Scissors size={46} strokeWidth={1.7} />
        </motion.div> */}

        {/* <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="section-kicker mb-4"
        >
          Since 2010
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          // className="font-display text-6xl font-extrabold leading-none text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <img src={logo_home} alt="Barber's Den Logo" className="mx-auto h-24 w-auto sm:h-32 md:h-40 lg:h-48" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-white/85 sm:text-lg md:text-xl"
        >
          Premium barbershop cuts, sharp beard work, and refined grooming in a classic modern studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button as={Link} to="/booking" size="lg">
            Make an Appointment
          </Button>
          <Button as="a" href="#services" variant="outline" size="lg">
            Explore Services
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/15 bg-black/75 backdrop-blur md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/15 px-6 py-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <MapPin className="size-5 text-gold-500" />
            <div>
              <p className="font-heading text-sm uppercase text-gold-500">Address</p>
              <p className="text-sm text-white/80">123 New Lenox Street, Washington DC</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-center">
            <Phone className="size-5 text-gold-500" />
            <div>
              <p className="font-heading text-sm uppercase text-gold-500">Call Us</p>
              <p className="text-sm text-white/80">123-456-7890 for booking</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-center">
            <Clock className="size-5 text-gold-500" />
            <div>
              <p className="font-heading text-sm uppercase text-gold-500">Hours</p>
              <p className="text-sm text-white/80">Mon - Sat 11 AM - 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
