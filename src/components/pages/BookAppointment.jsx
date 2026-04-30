import { useState } from "react";

import StepIndicator from "../booking/StepIndicator";
import BookingSummary from "../booking/BookingSummary";
import StepBranch from "../booking/StepBranch";
import StepServices from "../booking/StepServices";
import StepDateTime from "../booking/StepDateTime";
import StepConfirm from "../booking/StepConfirm";
import { ScissorsIcon, ChevronRight } from "../booking/icons";

export default function BookAppointment() {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    branch: null,
    barber: null,
    services: [],
    date: "",
    time: "",
  });

  const canNext = () => {
    if (step === 1) return booking.branch;
    if (step === 2) return booking.barber && booking.services.length > 0;
    if (step === 3) return booking.date && booking.time;
    return true;
  };

  const reset = () => {
    setStep(1);
    setBooking({
      branch: null,
      barber: null,
      services: [],
      date: "",
      time: "",
    });
  };

  return (
    <div className="min-h-screen pt-24 bg-[#F5F0E8] py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8 items-center gap-4 flex flex-col">
        <ScissorsIcon />
        <h1 className="text-3xl font-bold">BOOK APPOINTMENT</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <StepIndicator current={step} />

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT */}
          <div className="flex-1">
            {step === 1 && <StepBranch booking={booking} setBooking={setBooking} />}
            {step === 2 && <StepServices booking={booking} setBooking={setBooking} />}
            {step === 3 && <StepDateTime booking={booking} setBooking={setBooking} />}
            {step === 4 && <StepConfirm booking={booking} onConfirm={reset} />}

            {step < 4 && (
              <div className="flex justify-between mt-5">
                {step > 1 && (
                  <button onClick={() => setStep(s => s - 1)}>
                    Back
                  </button>
                )}

                <button
                  disabled={!canNext()}
                  onClick={() => setStep(s => s + 1)}
                  className="flex items-center gap-2 bg-[#C9A84C] text-white px-6 py-3 rounded-xl"
                >
                  Next <ChevronRight />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-72">
            <BookingSummary booking={booking} />
          </div>

        </div>
      </div>
    </div>
  );
}