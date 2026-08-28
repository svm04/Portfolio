import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import portrait from '../assets/headshot-duotone-bust.png'

// A small "portrait card" standing in for a second photo — a duotone,
// poster-style treatment of her photo (not the literal shot used in the
// hero) set against a dot-grid pattern, with a few floating badges for
// the dev/business/education mix.
export default function AboutGraphic() {
  return (
    <div className="relative mx-auto max-w-sm py-6 md:ml-auto md:mr-0">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-mint/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-4 top-6 -z-10 h-40 w-40 rounded-full bg-coral/10 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="card relative mx-auto w-full max-w-[300px] rounded-3xl md:mx-0"
      >
        {/* clips the portrait to the rounded card — kept separate from the
            outer card so the floating badges below aren't clipped. Taller
            aspect ratio than before since the photo now fills the space
            the caption strip used to take. */}
        <div className="overflow-hidden rounded-3xl">
          <div className="relative aspect-[7/10] w-full overflow-hidden">
            {/* dot-grid texture behind the portrait */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(rgba(232, 166, 60, 0.35) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            <img src={portrait} alt="" className="relative h-full w-full object-cover object-top" draggable={false} />
          </div>
        </div>

        {/* code-brackets badge, overlapping the bottom-left corner — where
            the "Built with code" caption used to sit */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [8, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 },
          }}
          className="absolute -bottom-4 -left-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface font-display text-lg text-mint shadow-lg"
        >
          {'</>'}
        </motion.div>

        {/* floating skill chip, overlapping the left edge of the portrait */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: [-8, 7, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.65 },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
          }}
          className="absolute -left-6 top-[38%] z-20 flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-3.5 py-2 text-xs text-bone shadow-lg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          CIMA Dip MA
        </motion.div>

        {/* degree chip, overlapping the bottom-right corner — where the
            "Measured with data" caption used to sit */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [8, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 },
            y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.3 },
          }}
          className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-3.5 py-2 text-xs text-bone shadow-lg"
        >
          <GraduationCap size={13} className="text-mint" />
          BSc (Hons) IT & Mgmt
        </motion.div>
      </motion.div>
    </div>
  )
}
