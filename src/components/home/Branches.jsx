import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import API from "../../utils/api";

const Branches = ({ limit = 4, showTitle = true }) => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        console.log('Fetching branches from API...');
        const { data } = await API.get('/branches');
        console.log('Branches data received:', data);
        setBranches(data.data || data);
        setError(null);
      } catch (error) {
        console.error('Error fetching branches:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBranches();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-600">Loading branches...</div>;
  }

  if (error) {  
    return <div className="text-center py-20 text-red-600">Error loading branches: {error}</div>;
  }

  if (branches.length === 0) {
    return <div className="text-center py-20 text-gray-600">No branches available</div>;
  }
  return (
    <section id="Branches" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showTitle && (
          <SectionTitle
            eyebrow="Locations"
            title="Our Branches"
            subtitle="Visit a premium Berger chair near you, with consistent service and easy appointment times."
          />
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {branches.slice(0, limit).map((branch, index) => (
            <motion.article
              key={branch.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm transition hover:border-gold-500 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={branch.image}
                  alt={`${branch.name} barbershop interior`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute right-4 top-4 bg-gold-500 px-4 py-2 font-heading text-xs rounded-2xl font-bold uppercase text-black">
                  {branch.city}
                </span>
                <h3 className="absolute bottom-4 left-4 font-heading text-2xl font-bold uppercase text-white">
                  {branch.name}
                </h3>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-gold-600" />
                  <p className="font-medium text-neutral-800">
                    {branch.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-gold-600" />
                  <p className="text-neutral-700">{branch.hours}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-gold-600" />
                  <p className="text-neutral-700">{branch.phone}</p>
                </div>

                <Button as={Link} to="/booking" fullWidth>
                  Book This Branch
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            as={Link}
            to="/branches"
            variant="outline"
            className="rounded-full px-8"
          >
            View All Branches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Branches;
