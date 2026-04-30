import { Link } from 'react-router-dom'
import { Camera, Mail, MapPin, MessageCircle, Phone, Scissors, Share2,} from 'lucide-react'
import Button from './Button'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="mb-5 flex items-center gap-3">
            {/* <span className="flex size-12 items-center justify-center border border-gold-500 text-gold-500">
              <Scissors size={24} />
            </span>
            <span>
              <span className="block font-heading text-2xl font-bold uppercase">Berger</span>
              <span className="block text-[10px] font-bold uppercase tracking-wide text-gold-500">Barber Studio</span>
            </span> */}
            <img src={Logo} alt="Berger Barber Studio Logo" className="h-18 w-auto" />
          </Link>
          <p className="max-w-xs leading-7 text-white/70">
            Classic barbering, modern scheduling, and premium grooming for clean, confident style.
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, Camera, MessageCircle].map((Icon, index) => (
              <button
                key={index}
                type="button"
                className="flex size-10 items-center justify-center border border-white/15 text-white/75 transition hover:border-gold-500 hover:text-gold-500"
                aria-label="Social link"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-bold uppercase text-gold-500">Quick Links</h3>
          <ul className="space-y-3 text-white/70">
            {[
              ['Home', '/'],
              ['Branches', '/branches'],
              ['About', '/about'],
              ['Our Barbers', '/barbers'],
              ['Services', '/services/all'],
              ['Book Appointment', '/booking'],
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="transition hover:text-gold-500">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-bold uppercase text-gold-500">Contact</h3>
          <ul className="space-y-4 text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-gold-500" />
              <span>123 New Lenox Street, Washington DC</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-gold-500" />
              <span>123-456-7890</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-5 shrink-0 text-gold-500" />
              <span>info@bergershop.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-bold uppercase text-gold-500">Stay Sharp</h3>
          <p className="mb-5 leading-7 text-white/70">
            Get grooming tips, seasonal offers, and last-minute chair openings.
          </p>
          <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-gold-500"
              aria-label="Email address"
            />
            <Button type="submit" fullWidth>
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/50">
        Copyright 2026 Berger Barber Studio. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
