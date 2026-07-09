import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-semibold uppercase text-tealpro dark:text-teal-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink/70 dark:text-stone-300 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
