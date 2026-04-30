import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, eyebrow, align = 'center', className = '' }) => {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`mb-12 flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-2"
        >
          <span className="diamond-mark" />
          <span className="section-kicker">{eyebrow}</span>
          <span className="diamond-mark" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-black"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 ${align === 'left' ? '' : 'mx-auto'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
