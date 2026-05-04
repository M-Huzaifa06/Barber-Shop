import { useState } from "react";
import API from "../../utils/api";
import { LocationIcon, UserIcon, CalendarIcon, BoxIcon } from "./icons";

export default function StepConfirm({ booking, onConfirm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    setLoading(true);
    setError("");
    try {
      const bookingData = {
        branchId: booking.branch._id,
        barberId: booking.barber._id,
        serviceIds: booking.services.map(s => s._id),
        gender: booking.services[0]?.gender || 'male', // Assuming all services have same gender
        date: booking.date,
        startTime: booking.time,
        customer: {
          name,
          email,
          phone,
        },
      };
      await API.post('/bookings', bookingData);
      setConfirmed(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  if (confirmed) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
        <p className="text-gray-500 text-center text-sm">
          Your appointment at <span className="font-semibold text-gray-800">{booking.branch?.name}</span> with{" "}
          <span className="font-semibold text-gray-800">{booking.barber?.name}</span> on{" "}
          <span className="font-semibold text-gray-800">{booking.date} at {booking.time}</span> has been booked successfully.
        </p>
        <p className="text-gray-400 text-sm">A confirmation will be sent to {email}</p>
        <button
          onClick={onConfirm}
          className="mt-4 bg-[#C9A84C] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#b8963e] transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Confirm Booking</h2>
      <div className="bg-amber-50 rounded-xl p-4 mb-5 space-y-2 border border-amber-100">
        <div className="flex items-center gap-2">
          <LocationIcon />
          <span className="text-sm text-gray-700"><span className="font-semibold">{booking.branch?.name}</span> — {booking.branch?.city}</span>
        </div>
        <div className="flex items-center gap-2">
          <UserIcon />
          <span className="text-sm text-gray-700"><span className="font-semibold">{booking.barber?.name}</span> · {booking.barber?.experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon size={14} />
          <span className="text-sm text-gray-700 font-semibold">{booking.date} at {booking.time}</span>
        </div>
        <div className="flex items-start gap-2">
          <BoxIcon />
          <div className="flex-1">
            {(booking.services || []).map(s => (
              <div key={s._id} className="flex justify-between text-sm text-gray-700">
                <span>{s.name}</span>
                <span className="text-[#C9A84C] font-semibold">£{s.price}</span>
              </div>
            ))}
            <div className="border-t border-amber-200 mt-1 pt-1 flex justify-between font-bold text-gray-800">
              <span>Total</span>
              <span className="text-[#C9A84C]">
                £{(booking.services || []).reduce((a, s) => a + s.price, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Full Name</label>
          <input type="text" placeholder="John Smith" value={name} onChange={e => setName(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email</label>
          <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Phone</label>
          <input type="tel" placeholder="+44 7700 900000" value={phone} onChange={e => setPhone(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors" />
        </div>
      </div>
      <button
        disabled={!name || !email || !phone || loading}
        onClick={handleConfirm}
        className="w-full mt-5 bg-[#C9A84C] text-white font-bold py-4 rounded-xl hover:bg-[#b8963e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-base"
      >
        {loading ? 'Confirming...' : 'Confirm Appointment'}
      </button>

      {error && (
        <div className="mt-3 border border-red-500 bg-red-500/10 p-3 text-sm text-red-100">
          {error}
        </div>
      )}
    </div>
  );
}