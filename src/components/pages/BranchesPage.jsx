import Branches from '../home/Branches'

const BranchesPage = () => {
  return (
    <div className="bg-paper pt-20">
      <section className="relative overflow-hidden bg-black px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <img
          src="https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Premium barbershop branch"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl">
          <p className="section-kicker mb-3">Locations</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">Choose Your Berger</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Every branch follows the same service standards, so you can book the location that fits your day.
          </p>
        </div>
      </section>
      <Branches showTitle={false} />
    </div>
  )
}

export default BranchesPage
