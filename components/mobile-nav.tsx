import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from './ui/button';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MobileNav = () => (
  <div className="mt-20 ">
    <motion.ul className="p-6" variants={variants}>
      <motion.li
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link className="hover:opacity-70" href="#home">
          Home
        </Link>
      </motion.li>

      <motion.li
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link className="hover:opacity-70" href="#green-energy">
          green energy
        </Link>
      </motion.li>

      <motion.li
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link className="hover:opacity-70" href="#case-study">
          case study
        </Link>
      </motion.li>

      <motion.li
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link className="hover:opacity-70" href="#projects">
          projects
        </Link>
      </motion.li>
    </motion.ul>

    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div variants={linkVariants} whileTap={{ scale: 0.5 }}>
        <Button
          variant="outline"
          size="lg"
          className="bg-black text-white hover:bg-black/90  hover:text-white mx-6 rounded-full px-4"
        >
          Become a Partner
        </Button>
      </motion.div>
    </motion.div>
  </div>
);

const itemIds = [0, 1, 2, 3, 4];
