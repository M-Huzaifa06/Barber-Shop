import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'Testimonials', label: 'Testimonials' },
  { id: 'Branches', label: 'Branches' },
  { id: 'OurStaff', label: 'Our Staff' },
  { id: 'PriceList', label: 'Price List' },
  { id: 'VisitUs', label: 'Visit Us' },
]

const VerticalNav = () => {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('#banner')
      const footer = document.querySelector('footer')
      const heroHeight = hero?.offsetHeight ?? 600
      const footerTop = footer?.offsetTop ?? document.body.scrollHeight
      const y = window.scrollY
      const bottom = y + window.innerHeight

      setVisible(y > heroHeight - 120 && bottom < footerTop - 80)

      const current = sections.find((section) => {
        const element = document.getElementById(section.id)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      setActive(current?.id ?? '')
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollTo = (event, id) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - 78
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 md:block ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0 pointer-events-none'
      }`}
      aria-label="Section navigation"
    >
      <div className="flex flex-col items-center gap-5">
        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => scrollTo(event, section.id)}
              className="group relative"
              aria-label={`Navigate to ${section.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black px-2.5 py-1 text-xs font-semibold text-gold-500 opacity-0 shadow-md transition group-hover:opacity-100">
                {section.label}
              </span>
              <span
                className={`block size-3 rotate-45 border-2 transition ${
                  isActive
                    ? 'scale-125 border-gold-500 bg-gold-500'
                    : 'border-gold-500 bg-transparent group-hover:scale-125 group-hover:bg-gold-500'
                }`}
              />
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default VerticalNav
