import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0.24, 1] },
  },
};

export const RevealGroup = ({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) => (
  <motion.div
    className={className}
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div variants={item} className={className}>
    {children}
  </motion.div>
);
