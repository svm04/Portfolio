import { motion } from 'framer-motion'

// Reusable scroll-reveal wrapper. Fades + rises into place once,
// the first time it enters the viewport.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className = '',
  as = 'div',
}) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
