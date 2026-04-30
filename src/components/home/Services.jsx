import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brush, Droplets, Scissors, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import SectionTitle from '../common/SectionTitle'

const services = [
  {
    title: 'Haircutting',
    description: 'Tailored clipper, scissor, taper, and fade work shaped to your head and daily routine.',
    icon: Scissors,
    image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Shaving',
    description: 'Hot towel prep, clean razor lines, and a smooth finish with calming aftercare.',
    icon: Droplets,
    image: 'https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Styling',
    description: 'Texture, shape, blow-dry, and product guidance for a look that holds after you leave.',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Trimming',
    description: 'Beard sculpting, neckline cleanup, moustache detail, and balanced facial framing.',
    icon: Brush,
    image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-[#f8f4ec] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="What We Do"
          title={<>Our <span className="text-gold-500">Services</span></>}
          subtitle="Traditional barbershop craft, sharpened for modern schedules, faces, and finishes."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative min-h-85 overflow-hidden bg-white shadow-sm"
            >
              <img
                src={service.image}
                alt={`${service.title} service`}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/65" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-6 flex size-20 items-center justify-center border border-gold-500/30 bg-gold-500/10 text-gold-600 transition duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-black">
                  <service.icon size={34} strokeWidth={1.7} />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-black transition group-hover:text-gold-300">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600 transition group-hover:text-white/85">
                  {service.description}
                </p>
                <Link
                  to="/services/all"
                  className="mt-7 font-heading text-sm font-bold uppercase text-gold-600 transition group-hover:text-gold-300"
                >
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button as={Link} to="/services/all">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
