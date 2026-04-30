import { useState } from "react";
import { BARBERS, MALE_SERVICES, FEMALE_SERVICES } from "./data";
import { UserIcon } from "./icons";

export default function StepServices({ booking, setBooking }) {
  const [gender, setGender] = useState(null);
  const [subStep, setSubStep] = useState("gender");

  const barbers = BARBERS[booking.branch?.id] || [];
  const services = gender === "male" ? MALE_SERVICES : FEMALE_SERVICES;
  const totalPrice = (booking.services || []).reduce((a, s) => a + s.price, 0);
  const totalMin = (booking.services || []).reduce((a, s) => a + s.duration, 0);

  const toggleService = (svc) => {
    const current = booking.services || [];
    const exists = current.find(s => s.id === svc.id);
    if (exists) {
      setBooking(prev => ({ ...prev, services: current.filter(s => s.id !== svc.id) }));
    } else {
      setBooking(prev => ({ ...prev, services: [...current, svc] }));
    }
  };

  if (subStep === "gender") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Select Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {["Male", "Female"].map(g => (
            <button
              key={g}
              onClick={() => { setGender(g.toLowerCase()); setSubStep("barber"); }}
              className={`flex flex-col items-center gap-2 p-6 rounded-xl border-2 transition-all hover:border-[#C9A84C] hover:bg-amber-50
                ${gender === g.toLowerCase() ? "border-[#C9A84C] bg-amber-50" : "border-gray-200"}`}
            >
              <UserIcon size={28} color="#6b7280" />
              <span className="font-semibold text-gray-700">{g}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (subStep === "barber") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Select Services</h2>
        <h3 className="text-base font-semibold text-gray-600 mb-4">Select Barber</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {barbers.map(b => (
            <button
              key={b.id}
              onClick={() => { setBooking(prev => ({ ...prev, barber: b })); setSubStep("services"); }}
              className={`p-4 rounded-xl border-2 text-left transition-all hover:border-[#C9A84C] hover:bg-amber-50
                ${booking.barber?.id === b.id ? "border-[#C9A84C] bg-amber-50" : "border-gray-200"}`}
            >
              <p className="font-semibold text-gray-800">{b.name}</p>
              <p className="text-gray-500 text-sm">{b.experience}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Select Services</h2>
      <h3 className="text-base font-semibold text-gray-600 mb-4">Select Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {services.map(svc => {
          const selected = (booking.services || []).find(s => s.id === svc.id);
          return (
            <button
              key={svc.id}
              onClick={() => toggleService(svc)}
              className={`flex justify-between items-start p-4 rounded-xl border-2 text-left transition-all hover:border-[#C9A84C]
                ${selected ? "border-[#C9A84C] bg-amber-50" : "border-gray-200 hover:bg-amber-50"}`}
            >
              <div>
                <p className="font-semibold text-gray-800 text-sm">{svc.name}</p>
                <p className="text-gray-400 text-xs">{svc.duration} minutes</p>
              </div>
              <span className="text-[#C9A84C] font-bold text-sm">£{svc.price}</span>
            </button>
          );
        })}
      </div>
      <div className="border-t border-gray-100 pt-3">
        <p className="text-sm font-semibold text-gray-700">
          Total: <span className="text-[#C9A84C]">£{totalPrice.toFixed(2)}</span> | {totalMin} min
        </p>
      </div>
    </div>
  );
}