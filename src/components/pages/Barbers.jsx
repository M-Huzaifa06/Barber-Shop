import { staff } from '../../data/siteData'
import { Search, Link as LinkIcon } from "lucide-react";

const Barbers = () => {
  // const [selected, setSelected] = useState(null);
  return (
    <div className="bg-paper pt-20">
      <section className="relative overflow-hidden bg-black px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <img
          src="https://images.pexels.com/photos/3998414/pexels-photo-3998414.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Berger barber team"
          className="absolute inset-0 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-black/68" />
        <div className="relative mx-auto max-w-4xl">
          <p className="section-kicker mb-3">Our Barbers</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">Meet the Chair Masters</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Pick a barber by specialty, style, or the kind of appointment you want to book.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-8">
               {staff.map((member, index) => (
            <div key={index} className="group text-center mx-6">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full 
                    bg-linear-to-r from-transparent via-yellow-400 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    group-hover:animate-shimmer"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 px-2">
                <div className="mb-4 h-0.5 w-full overflow-hidden relative">
                  <div
                    className="absolute top-0 left-1/2 
               w-full h-full 
               bg-linear-to-r from-transparent via-yellow-400 to-transparent 
               opacity-0 
               group-hover:opacity-100
               group-hover:animate-expandLine"
                    style={{ transform: "translateX(-50%) scaleX(0)" }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-gold-500 uppercase text-sm font-semibold tracking-wide mt-1">
                  {member.role}
                </p>

                {/* Icons */}
                <div className="flex justify-center gap-4 mt-5">
                  <button
                    className="w-12 h-12 flex items-center justify-center border border-gold-500 text-gold-500 rounded-lg transition hover:bg-gold-500 hover:text-white"
                  >
                    <Search size={18} />
                  </button>

                  <button className="w-12 h-12 flex items-center justify-center border border-gold-500 text-gold-500 rounded-lg transition hover:bg-gold-500 hover:text-white">
                    <LinkIcon size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>
      
    </div>
  )
}

export default Barbers
