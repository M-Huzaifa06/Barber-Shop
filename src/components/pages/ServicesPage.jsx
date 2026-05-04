import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, Clock } from 'lucide-react'
import Button from '../common/Button'
import API from '../../utils/api'

const serviceImages = [
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=900',
]

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGender, setSelectedGender] = useState('male');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await API.get(`/services?gender=${selectedGender}`);
        setServices(data.data || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [selectedGender]);

  if (loading) {
    return <div className="text-center py-20 text-gray-600">Loading services...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">Error loading services: {error}</div>;
  }

  return (
    <div className="bg-paper pt-20">
      <section className="relative overflow-hidden bg-black px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <img
          src="https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Barber tools and grooming services"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/68" />
        <div className="relative mx-auto max-w-4xl">
          <p className="section-kicker mb-3">Services</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">Grooming Menu</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Choose a single service or combine haircut, beard, shave, and finish for a full studio appointment.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {serviceImages.map((image) => (
            <img key={image} src={image} alt="Berger grooming service" className="h-56 w-full object-cover sm:h-64 lg:h-56" />
          ))}
        </div>

        <div className="border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="section-kicker mb-3">All Services</p>
          <h2 className="section-heading text-black">Pick Your Finish</h2>

          {/* Gender Selection */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSelectedGender('male')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedGender === 'male'
                  ? 'bg-[#C9A84C] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Men's Services
            </button>
            <button
              onClick={() => setSelectedGender('female')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedGender === 'female'
                  ? 'bg-[#C9A84C] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Women's Services
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service._id} className="border border-neutral-200 p-5 transition hover:border-gold-500 hover:bg-[#fbf8ef]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold uppercase text-black">{service.name}</h3>
                  <span className="font-heading text-2xl font-bold text-gold-600">£{service.price}</span>
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                  <Clock size={16} /> {service.duration} minutes
                </p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2"><Check className="size-4 text-gold-600" /> Consultation included</li>
                  <li className="flex gap-2"><Check className="size-4 text-gold-600" /> Finished with professional product</li>
                </ul>
                <Button as={Link} to="/booking" className="mt-6" fullWidth>
                  Book Service
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
