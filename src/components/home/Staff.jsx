import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Search, Link as LinkIcon } from "lucide-react";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import { staff } from "../../data/siteData";

const Staff = ({ compact = false }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="OurStaff" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Professionals"
          title={
            <>
              Our <span className="text-gold-500">Staff</span>
            </>
          }
          subtitle="Meet the barbers trusted for calm service, clean execution, and consistent detail."
        />

        <div className="grid md:grid-cols-3 gap-14 px-9">
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
                    onClick={() => setSelected(member)}
                    className="relative w-12 h-12 flex items-center justify-center border-2 border-[#d5a353] text-[#d5a353] rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  >
                    {/* Sliding background */}
                    <span className="absolute inset-0 bg-[#d5a353] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>

                    {/* Icon */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      <Search size={18} />
                    </span>
                  </button>

                  <button className="relative w-12 h-12 flex items-center justify-center border-2 border-[#d5a353] text-[#d5a353] rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                    {/* Sliding background (from right → left) */}
                    <span className="absolute inset-0 bg-[#d5a353] transform translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>

                    {/* Icon */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      <LinkIcon size={18} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="mt-12 text-center">
            <Button as={Link} to="/barbers" className="rounded-full px-8">
              View All Barbers
            </Button>
          </div>
        )}
      </div>

      {/* Staff */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
          <div className="relative max-w-3xl w-full bg-black overflow-hidden rounded-lg">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 text-white">
              <p className="text-gold-500 uppercase text-sm">{selected.role}</p>

              <h3 className="text-3xl font-bold uppercase mt-1">
                {selected.name}
              </h3>

              <p className="mt-2 text-white/70">{selected.specialty}</p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gold-500 transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Staff;
