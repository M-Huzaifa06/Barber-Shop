import { CalendarIcon, LocationIcon, UserIcon, BoxIcon, CreditCardIcon } from "./icons";

export default function BookingSummary({ booking }) {
  const isEmpty = !booking.branch;
  return (
    <div className="bg-white rounded-2xl border-2 border-[#C9A84C] shadow-sm p-5 min-w-60">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon size={18} />
        <h2 className="font-bold text-lg text-gray-900">Booking Summary</h2>
      </div>
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-6 gap-2">
          <CalendarIcon size={40} color="#d1d5db" />
          <p className="text-gray-400 text-sm text-center">Your selections will appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Branch</p>
            <div className="flex items-start gap-1">
              <LocationIcon />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{booking.branch?.name}</p>
                <p className="text-gray-500 text-xs">{booking.branch?.city}</p>
              </div>
            </div>
          </div>
          {booking.barber && (
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Barber</p>
              <div className="flex items-start gap-1">
                <UserIcon />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{booking.barber.name}</p>
                  <p className="text-gray-500 text-xs">{booking.barber.experience}</p>
                </div>
              </div>
            </div>
          )}
          {booking.services && booking.services.length > 0 && (
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Services</p>
              <div className="space-y-1">
                {booking.services.map(s => (
                  <div key={s.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <BoxIcon />
                      <span className="text-gray-800 text-sm">{s.name}</span>
                    </div>
                    <span className="text-[#C9A84C] font-semibold text-sm">£{s.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <CreditCardIcon />
                  <span className="font-semibold text-gray-800">Total</span>
                </div>
                <span className="text-[#C9A84C] font-bold text-xl">
                  £{booking.services.reduce((a, s) => a + s.price, 0).toFixed(2)}
                </span>
              </div>
            </div>
          )}
          {booking.date && booking.time && (
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Date & Time</p>
              <div className="flex items-center gap-1">
                <CalendarIcon size={14} />
                <span className="text-gray-800 text-sm font-semibold">{booking.date} at {booking.time}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}