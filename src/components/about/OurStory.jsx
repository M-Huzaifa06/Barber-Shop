import { Scissors } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-[#f4f1ea] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Small top line + icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gold-500"></div>
            <div className="text-gold-500">
              <Scissors size={18} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-black mb-6 tracking-tight">
            OUR STORY
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-xl">
            <p>
              Founded with passion and precision, our barbershop began as a small dream to redefine men's grooming.
            </p>

            <p>
              Every cut, every shave, and every style we create reflects our dedication to detail and individuality.
            </p>

            <p>
              At the heart of our story is one simple goal — to make every client look sharp and feel their best.
            </p>
          </div>

          {/* Button */}
          <button className="mt-10 inline-flex items-center gap-3 
                             bg-linear-to-r from-[#D4AF37] to-[#F4D03F] 
                             text-black font-semibold 
                             px-8 py-4 rounded-full 
                             shadow-md hover:shadow-lg 
                             transition duration-300">
            <Scissors size={18} />
            BOOK APPOINTMENT
          </button>
        </div>

        {/* RIGHT IMAGES GRID */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Large top image */}
          {/* <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg ">
            <img
              src="/images/story1.jpg"
              alt=""
              className="w-full h-[240px] object-cover"
            />
          </div> */}

          {/* Top left */}
          <div className="rounded-2xl overflow-hidden shadow-lg -mt-4">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400"
              alt=""
              className="w-full h-50 object-cover"
            />
          </div>

          {/* Top right */}
          <div className="rounded-2xl overflow-hidden shadow-lg -mb-4 h-45">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400"
              alt=""
              className="w-full h-50 object-cover"
            />
          </div>
          {/* Bottom left */}
          <div className="rounded-2xl overflow-hidden shadow-lg -mt-4 h-45">
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400"
              alt=""
              className="w-full h-50 object-cover"
            />
          </div>

          {/* Bottom right */}
          <div className="rounded-2xl overflow-hidden shadow-lg -mb-4">
            <img
              src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400"
              alt=""
              className="w-full h-50 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}