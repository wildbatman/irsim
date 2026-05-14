import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
    y: 14,
  },
  show: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE_PREMIUM },
  },
};

export function MaskedReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
