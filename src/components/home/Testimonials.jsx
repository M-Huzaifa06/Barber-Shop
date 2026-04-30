import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'David Johnson',
    text: 'Absolutely the best barbershop in town. My fade was clean, the lines were sharp, and booking online took less than a minute.',
  },
  {
    name: 'Michael Carter',
    text: 'From the moment I stepped in, the team was warm, precise, and completely dialed in. I left looking better than I expected.',
  },
  {
    name: 'Alex Brown',
    text: 'I booked a beard trim before work and had zero waiting time. The shape, towel service, and finish were excellent.',
  },
  {
    name: 'James Wilson',
    text: 'The craftsmanship here is unmatched. My barber listened first, then delivered exactly the cut I had in mind.',
  },
  {
    name: 'Robert Lee',
    text: 'A premium barbershop experience from start to finish. Great interior, great music, and an even better haircut.',
  },
]

const backgroundImage = 'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1800'

const Testimonials = () => {
  const [active, setActive] = useState(2)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  const next = () => setActive((value) => (value + 1) % testimonials.length)
  const previous = () => setActive((value) => (value - 1 + testimonials.length) % testimonials.length)

  const getPosition = (index) => {
    const raw = index - active
    if (raw > testimonials.length / 2) return raw - testimonials.length
    if (raw < -testimonials.length / 2) return raw + testimonials.length
    return raw
  }

  return (
    <section
      id="Testimonials"
      className="relative overflow-hidden bg-black bg-cover bg-fixed bg-center px-4 py-20 text-white sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/72" />
      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="diamond-mark" />
          <span className="section-kicker">Testimonials</span>
          <span className="diamond-mark" />
        </div>
        <h2 className="section-heading text-white">What Our Clients Say</h2>

        <div className="relative mt-12 h-87.5 overflow-hidden sm:h-90">
          {testimonials.map((testimonial, index) => {
            const position = getPosition(index)
            const isActive = position === 0
            const hidden = Math.abs(position) > 2

            return (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActive(index)}
                className={`absolute left-1/2 top-4/4 flex h-70 w-[min(88vw,420px)] -translate-y-1/2 flex-col items-center justify-center border p-7 text-center shadow-2xl transition-all duration-500 ${
                  isActive
                    ? 'border-gold-500 bg-linear-to-br from-gold-500 to-merlot text-white'
                    : 'border-white/20 bg-white/90 text-neutral-900'
                }`}
                style={{
                  transform: `translate(calc(-50% + ${position * 115}px), -50%) scale(${isActive ? 1.04 : 1 - Math.abs(position) * 0.08})`,
                  zIndex: 20 - Math.abs(position),
                  opacity: hidden ? 0 : isActive ? 1 : 0.72,
                  pointerEvents: hidden ? 'none' : 'auto',
                }}
                aria-label={`Read testimonial from ${testimonial.name}`}
              >
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current text-current" />
                  ))}
                </div>
                <p className="text-base italic leading-7">"{testimonial.text}"</p>
                <p className="mt-7 font-heading text-lg font-bold uppercase">{testimonial.name}</p>
              </button>
            )
          })}

          <button
            type="button"
            onClick={previous}
            className="absolute rounded-full left-1 top-2/3 z-30 flex size-11 -translate-y-1/2 items-center justify-center border-gold-500 bg-linear-to-br from-gold-500 to-merlot cursor-pointer text-black transition hover:scale-110 sm:left-8"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute rounded-full right-1 top-2/3 z-30 flex size-11 -translate-y-1/2 items-center justify-center border-gold-500 bg-linear-to-br from-gold-500 to-merlot cursor-pointer text-black transition hover:scale-110 sm:right-8"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActive(index)}
              className={`size-3 rotate-45 transition ${active === index ? 'bg-gold-500' : 'bg-white/40 hover:bg-white'}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
