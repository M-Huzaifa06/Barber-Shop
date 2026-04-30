import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Button from '../common/Button'

const Contact = () => {
  return (
    <section id="VisitUs" className="bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-16">
          <div className="max-w-xl">
            <p className="section-kicker mb-3">Visit Us</p>
            <h2 className="section-heading text-black">Ready for a sharper look?</h2>
            <div className="mt-5 h-px w-16 bg-gold-500" />
            <p className="mt-6 leading-8 text-neutral-700">
              Stop by the shop for a classic grooming experience. Walk-ins are welcome when chairs are open, and booking ahead keeps your slot waiting.
            </p>

            <div className="mt-9 space-y-6">
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-bold uppercase text-gold-600">
                  <MapPin size={17} /> Address
                </h3>
                <p className="text-lg font-semibold text-neutral-900">123 Main Street, Downtown</p>
                <p className="text-neutral-600">New York, NY 10001</p>
              </div>
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-bold uppercase text-gold-600">
                  <Phone size={17} /> Call Us
                </h3>
                <p className="text-lg font-semibold text-neutral-900">(555) 123-4567</p>
              </div>
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-bold uppercase text-gold-600">
                  <Mail size={17} /> Email
                </h3>
                <p className="text-lg font-semibold text-neutral-900">info@bergershop.com</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/booking">
                Book Appointment
              </Button>
              <Button as="a" href="https://maps.google.com" target="_blank" rel="noreferrer" variant="dark">
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-115 overflow-hidden lg:min-h-170">
          <iframe
            title="Berger Barbershop map"
            src="https://www.google.com/maps?q=Empire%20State%20Building%20New%20York&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black/5" />
        </div>
      </div>
    </section>
  )
}

export default Contact
