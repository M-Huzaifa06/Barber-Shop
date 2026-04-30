import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Scissors } from 'lucide-react'
import Button from '../common/Button'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-4 pt-28 text-white sm:px-6 lg:px-8">
      <img
        src="https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg?auto=compress&cs=tinysrgb&w=1800"
        alt="Barber shop login background"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center justify-center py-12">
        <div className="w-full max-w-md border border-white/15 bg-black/80 p-6 shadow-2xl backdrop-blur sm:p-8">
          <div className="mb-9 text-center">
            <div className="mx-auto mb-5 flex size-16 items-center justify-center border border-gold-500 text-gold-500">
              <Scissors size={30} />
            </div>
            <p className="section-kicker mb-2">Account</p>
            <h1 className="font-heading text-4xl font-bold uppercase">Welcome Back</h1>
            <p className="mt-3 text-sm text-white/60">Sign in to manage appointments and saved preferences.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-white/85">Email Address</span>
              <input
                className="w-full border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="you@email.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="font-heading text-sm font-bold uppercase text-white/85">Password</span>
              <span className="relative block">
                <input
                  className="w-full border border-white/15 bg-white/10 px-4 py-3 pr-12 text-white outline-none transition placeholder:text-white/40 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 transition hover:text-gold-500"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </span>
            </label>

            <div className="flex items-center justify-between text-sm text-white/60">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="size-4 accent-gold-500" />
                Remember me
              </label>
              <a href="#forgot" className="text-gold-500 transition hover:text-gold-300">Forgot password?</a>
            </div>

            {submitted && (
              <div className="border border-gold-500 bg-gold-500/10 p-3 text-sm text-gold-100">
                Demo sign-in received. No authentication request was sent.
              </div>
            )}

            <Button type="submit" fullWidth size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/60">
            New here?{' '}
            <Link to="/booking" className="font-semibold text-gold-500 hover:text-gold-300">
              Book as a guest
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
