import { Scissors } from "lucide-react";
export default function GroomingCTA() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e6e1] px-9">
      <div className="w-full max-w-350 rounded-2xl bg-linear-to-r from-black to-[#0d1b2a] text-center px-8 py-15 shadow-xl">
        
        {/* Icon */}
        <div className="text-[#e0b83f] text-3xl mb-6 items-center justify-center flex">
          <Scissors />
        </div>

        {/* Text*/}
        <h1 className="text-white font-extrabold text-4xl md:text-5xl tracking-wide mb-6">
          READY FOR THE ULTIMATE GROOMING EXPERIENCE?
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Book your appointment today and discover why Berger is Manhattan's
          premier destination
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-3 bg-[#e0b83f] text-black font-bold px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition duration-300">
          BOOK NOW
          <span className="text-lg"><Scissors /></span>
        </button>
      </div>
    </div>
  );
}