import { useMemo, useState } from 'react'
import { CalendarDays, MessageCircle, Scissors } from 'lucide-react'
import Button from '../common/Button'
import { branches, priceList, staff } from '../../data/siteData'

const times = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']

const initialForm = {
  name: '',
  phone: '',
  email: '',
  branch: branches[0].name,
  barber: staff[0].name,
  service: priceList[0].name,
  date: '',
  time: '',
  notes: '',
}

const BookAppointment = () => {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const selectedService = priceList.find((service) => service.name === form.service) ?? priceList[0]

  const whatsappUrl = useMemo(() => {
    const message = [
      `Hi Berger, I would like to book an appointment.`,
      `Name: ${form.name || 'Guest'}`,
      `Service: ${form.service}`,
      `Branch: ${form.branch}`,
      `Barber: ${form.barber}`,
      `Date: ${form.date || 'Flexible'}`,
      `Time: ${form.time || 'Flexible'}`,
    ].join('\n')

    return `https://wa.me/15551234567?text=${encodeURIComponent(message)}`
  }, [form])

  const update = (field, value) => {
    setSubmitted(false)
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-paper pt-20">
      <section className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
        <img
          src="https://images.pexels.com/photos/3992872/pexels-photo-3992872.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Barber preparing an appointment chair"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center border border-gold-500 text-gold-500">
            <CalendarDays size={30} />
          </div>
          <p className="section-kicker mb-3">Appointment</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">Book Your Chair</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Pick a service, barber, branch, and time. Submit the form for an instant demo confirmation or send it through WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <form onSubmit={handleSubmit} className="border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center bg-gold-500 text-black">
              <Scissors size={24} />
            </span>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase text-black">Appointment Details</h2>
              <p className="text-sm text-neutral-500">All fields marked with an asterisk are required.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Full Name *</span>
              <input className="field" required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="John Carter" />
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Phone *</span>
              <input className="field" required value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="(555) 123-4567" />
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Email</span>
              <input className="field" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="you@email.com" />
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Branch *</span>
              <select className="field" value={form.branch} onChange={(event) => update('branch', event.target.value)}>
                {branches.map((branch) => (
                  <option key={branch.name}>{branch.name}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Barber *</span>
              <select className="field" value={form.barber} onChange={(event) => update('barber', event.target.value)}>
                {staff.map((member) => (
                  <option key={member.name}>{member.name}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Service *</span>
              <select className="field" value={form.service} onChange={(event) => update('service', event.target.value)}>
                {priceList.map((service) => (
                  <option key={service.name}>{service.name}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Date *</span>
              <input className="field" type="date" required value={form.date} onChange={(event) => update('date', event.target.value)} />
            </label>
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Time *</span>
              <select className="field" required value={form.time} onChange={(event) => update('time', event.target.value)}>
                <option value="">Select time</option>
                {times.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 md:col-span-2">
              <span className="font-heading text-sm font-bold uppercase text-neutral-800">Special Requests</span>
              <textarea className="field min-h-32 resize-y" value={form.notes} onChange={(event) => update('notes', event.target.value)} placeholder="Fade height, beard length, occasion, accessibility needs..." />
            </label>
          </div>

          {submitted && (
            <div className="mt-6 border border-gold-500 bg-gold-50 p-4 text-sm font-medium text-neutral-900">
              Appointment request received. This is a frontend demo, so no real booking was sent.
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="submit" size="lg">
              Confirm Booking
            </Button>
            <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" variant="dark" size="lg">
              <MessageCircle size={18} />
              WhatsApp
            </Button>
          </div>
        </form>

        <aside className="h-fit border border-neutral-200 bg-black p-6 text-white shadow-sm lg:sticky lg:top-28">
          <p className="section-kicker mb-3">Summary</p>
          <h2 className="font-heading text-3xl font-bold uppercase">Your Visit</h2>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/60">Service</span>
              <span className="font-semibold">{form.service}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/60">Duration</span>
              <span className="font-semibold">{selectedService.duration}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/60">Price</span>
              <span className="font-heading text-xl font-bold text-gold-500">{selectedService.price}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/60">Branch</span>
              <span className="font-semibold text-right">{form.branch}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-white/60">Barber</span>
              <span className="font-semibold">{form.barber}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-white/60">When</span>
              <span className="font-semibold">{form.date && form.time ? `${form.date} at ${form.time}` : 'Choose a slot'}</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default BookAppointment
