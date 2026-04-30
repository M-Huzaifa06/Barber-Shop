import { BRANCHES } from "./data";
import { LocationIcon } from "./icons";

export default function StepBranch({ booking, setBooking }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Select Branch
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {BRANCHES.map((b) => (
          <button
            key={b.id}
            onClick={() =>
              setBooking((prev) => ({
                ...prev,
                branch: b,
                barber: null,
                services: [],
                date: "",
                time: "",
              }))
            }
            className={`flex items-start gap-2 p-4 rounded-xl border-2 text-left transition-all
              hover:border-[#C9A84C] hover:bg-amber-50
              ${
                booking.branch?.id === b.id
                  ? "border-[#C9A84C] bg-amber-50"
                  : "border-gray-200"
              }`}
          >
            <LocationIcon size={16} />

            <div>
              <p className="font-semibold text-gray-800">
                {b.name}
              </p>
              <p className="text-gray-500 text-sm">
                {b.city}
              </p>
            </div>
          </button>
        ))}
      </div>
      
    </div>
  );
}