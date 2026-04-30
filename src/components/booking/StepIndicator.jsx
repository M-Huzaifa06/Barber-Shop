import { CheckIcon } from "./icons";

export default function StepIndicator({ current }) {
  const steps = ["Branch", "Services", "Date & Time", "Confirm"];

  return (
    <div className="flex justify-between bg-white p-5 rounded-xl mb-6">
      {steps.map((label, i) => {
        const num = i + 1;
        const done = num < current;
        const active = num === current;

        return (
          <div key={num} className="text-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center
              ${done ? "bg-green-500 text-white"
                : active ? "bg-[#C9A84C] text-white"
                : "bg-gray-200"}`}>
              {done ? <CheckIcon /> : num}
            </div>
            <p className="text-xs">{label}</p>
          </div>
        );
      })}
    </div>
  );
}