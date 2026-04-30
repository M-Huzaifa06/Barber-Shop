import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { priceList } from '../../data/siteData'

const priceImage = 'https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=1400'

const Pricing = () => {
  return (
    <section id="PriceList" className="bg-[#f8f4ec]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-75 overflow-hidden lg:min-h-155">
          <img src={priceImage} alt="Barber tools on a counter" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16">
          <div className="mb-8">
            <p className="section-kicker mb-3">Menu</p>
            <h2 className="section-heading text-black">Price List</h2>
            <div className="mt-5 h-px w-16 bg-gold-500" />
            <p className="mt-5 max-w-xl leading-7 text-neutral-600">
              Select a haircut or beard service and enjoy a premium appointment handled by experienced barbers.
            </p>
          </div>

          <div className="mb-8 divide-y divide-neutral-200">
            {priceList.map((service) => (
              <div key={service.name} className="group flex items-center justify-between gap-4 py-4 transition hover:bg-white">
                <div>
                  <p className="font-heading text-lg font-bold uppercase text-neutral-900">{service.name}</p>
                  <p className="text-sm text-neutral-500">{service.duration}</p>
                </div>
                <p className="font-heading text-2xl font-bold text-gold-600 transition group-hover:scale-105">
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <Button as={Link} to="/services/all" className="w-fit">
            View All
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
