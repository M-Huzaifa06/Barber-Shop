import { Scissors, Sparkles, BadgeCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-black py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Icon + Lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-0.5 bg-gold-500/60"></div>
          <Sparkles className="text-gold-500" size={20} />
          <div className="w-16 h-0.5 bg-gold-500/60"></div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          WHAT SETS US APART
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-4 text-lg">
          Excellence in every detail, luxury in every experience
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          
          {/* Card 1 */}
          <div className="rounded-2xl p-10 text-center 
                          bg-linear-to-r from-[#0f172a] to-[#1e293b] 
                          border border-white/10 
                          hover:border-gold-500/40 
                          transition duration-300">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            rounded-full bg-gold-500 text-black">
              <Scissors size={22} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              MASTER CRAFTSMANSHIP
            </h3>

            <p className="text-gray-400">
              Every cut is executed with precision and artistic flair by our expert barbers
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-10 text-center 
                          bg-linear-to-r from-[#0f172a] to-[#1e293b] 
                          border border-white/10 
                          hover:border-gold-500/40 
                          transition duration-300">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            rounded-full bg-gold-500 text-black">
              <Sparkles size={22} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              PREMIUM EXPERIENCE
            </h3>

            <p className="text-gray-400">
              Luxury service in an elegant atmosphere designed for your comfort
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-10 text-center 
                          bg-linear-to-r from-[#0f172a] to-[#1e293b] 
                          border border-white/10 
                          hover:border-gold-500/40 
                          transition duration-300">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            rounded-full bg-gold-500 text-black">
              <BadgeCheck size={22} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              EXCELLENCE STANDARD
            </h3>

            <p className="text-gray-400">
              We maintain the highest standards in grooming and customer service
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}