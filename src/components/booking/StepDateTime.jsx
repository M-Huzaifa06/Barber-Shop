import { useState, useEffect } from "react";
import API from "../../utils/api";

export default function StepDateTime({ booking, setBooking }) {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalMin = (booking.services || []).reduce((a, s) => a + s.duration, 0);

  const calculateEndTime = (startTime, duration) => {
    const [h, m] = startTime.split(':').map(Number);
    const totalMins = h * 60 + m + duration;
    const eh = Math.floor(totalMins / 60);
    const em = totalMins % 60;
    return `${eh.toString().padStart(2, '0')}:${em.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (booking.date && booking.barber && booking.services && booking.services.length > 0) {
      const fetchAvailableSlots = async () => {
        setLoading(true);
        try {
          const serviceIds = booking.services.map(s => s._id);
          const { data } = await API.post('/availability/slots', {
            barberId: booking.barber._id,
            date: booking.date,
            serviceIds: serviceIds
          });
          setAvailableSlots(data.data.slots.filter(slot => slot.available));
        } catch (error) {
          console.error('Error fetching available slots:', error);
          setAvailableSlots([]);
        } finally {
          setLoading(false);
        }
      };
      fetchAvailableSlots();
    } else {
      setAvailableSlots([]);
    }
  }, [booking.date, booking.barber, booking.services]);

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
            <p className="text-sm font-semibold text-gray-700">
              Available Slots {loading ? '(Loading...)' : `(${availableSlots.length} available)`}
            </p>
            <p className="text-xs text-gray-400">Shift: 09:00 - 19:00</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {availableSlots.map(slot => (
              <button
                key={slot.time}
                onClick={() => setBooking(prev => ({ ...prev, time: slot.time }))}
                className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all hover:border-[#C9A84C] hover:bg-amber-50
                  ${booking.time === slot.time ? "border-[#C9A84C] bg-amber-50 text-[#C9A84C]" : "border-gray-200 text-gray-700"}`}
              >
                {slot.time} - {calculateEndTime(slot.time, totalMin)}
              </button>
            ))}
            {!loading && availableSlots.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-4">
                No available slots for this date
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}