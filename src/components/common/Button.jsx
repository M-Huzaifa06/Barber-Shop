import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = forwardRef(({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  as: Component = 'button',
  fullWidth = false,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/60 focus:ring-offset-2 focus:ring-offset-black disabled:pointer-events-none disabled:opacity-60'

  const variants = {
    gold: 'bg-gold-500 text-black border border-gold-500 hover:bg-black hover:text-white hover:border-black shadow-[0_14px_30px_rgba(212,175,55,0.24)]',
    primary: 'bg-gold-500 text-black border border-gold-500 hover:bg-black hover:text-white hover:border-black shadow-[0_14px_30px_rgba(212,175,55,0.24)]',
    outline: 'bg-transparent text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-black',
    dark: 'bg-black text-white border border-black hover:bg-gold-500 hover:text-black hover:border-gold-500',
    ghost: 'bg-transparent text-white hover:text-gold-400',
    light: 'bg-white text-black border border-white hover:bg-gold-500 hover:border-gold-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-sm sm:text-base',
  }

  const ComponentTag = Component === 'button'
    ? motion.button
    : Component === 'a'
      ? motion.a
      : motion.create(Component || Link)

  return (
    <ComponentTag
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant] ?? variants.gold} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </ComponentTag>
  )
})

Button.displayName = 'Button'

export default Button
