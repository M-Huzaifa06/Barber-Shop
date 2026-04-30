import { generateSlots } from "./data";

export default function StepDateTime({ booking, setBooking }) {
  const totalDuration = (booking.services || []).reduce((a, s) => a + s.duration, 0) || 30;
  const slots = booking.date ? generateSlots(totalDuration) : [];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Select Date & Time</h2>
      <input
        type="date"
        value={booking.date || ""}
        min={new Date().toISOString().split("T")[0]}
        onChange={e => setBooking(prev => ({ ...prev, date: e.target.value, time: "" }))}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors mb-4"
      />
      {booking.date && (
        <>
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-semibold text-gray-700">Available Slots ({totalDuration} min)</p>
            <p className="text-xs text-gray-400">Shift: 09:00 - 19:00</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {slots.map(slot => (
              <button
                key={slot}
                onClick={() => setBooking(prev => ({ ...prev, time: slot }))}
                className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all hover:border-[#C9A84C] hover:bg-amber-50
                  ${booking.time === slot ? "border-[#C9A84C] bg-amber-50 text-[#C9A84C]" : "border-gray-200 text-gray-700"}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}