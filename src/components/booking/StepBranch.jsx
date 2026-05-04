import { useState, useEffect } from "react";
import API from "../../utils/api";
import { LocationIcon } from "./icons";

export default function StepBranch({ booking, setBooking }) {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const { data } = await API.get('/branches');
        setBranches(data.data || data);
      } catch (error) {
        console.error('Error fetching branches:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBranches();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading branches...</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Select Branch
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {branches.map((b) => (
          <button
            key={b._id}
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
                booking.branch?._id === b._id
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