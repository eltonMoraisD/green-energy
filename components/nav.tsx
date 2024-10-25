'use client';
import Link from 'next/link';
import { motion, useCycle, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { Button } from './ui/button';
import { useTrackingScrollContext } from '@/context/TrackingScrollContext';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useDimensions } from '@/hooks/use-dimensions';
import { MenuToggle } from './menu-toggle';
import { MobileNav } from './mobile-nav';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Nav = () => {
  const { targetContainer } = useTrackingScrollContext();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const { scrollY } = useScroll();

  const backgroundBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(3px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['none', '1px solid rgba(255, 255, 255, 0.2)']
  );

  const scrolllHeight = useTransform(scrollY, [100, 100], [120, 84]);

  return (
    <motion.div
      className={cn('fixed text-3xl w-full z-50 pt-4 pb-4 h-screen')}
      style={{
        backdropFilter: backgroundBlur,
        height: scrolllHeight,
        borderBottom,
      }}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className="flex items-center justify-between container px-4 sm:px-10 md:px-0 mx-auto"
      >
        <Link href="#home" className="md:flex items-center gap-4 hidden">
          <Image
            src="/logo.webp"
            width={500}
            height={500}
            alt="logo"
            className="size-12 rounded-lg"
          />
          <p
            className={cn('uppercase', {
              'text-black': targetContainer,
              'text-white': !targetContainer,
            })}
          >
            Suergy
          </p>
        </Link>

        <ul
          className={cn(
            'md:flex hidden lg:text-base md:text-xs uppercase gap-x-4',
            {
              'text-black': targetContainer,
              'text-white': !targetContainer,
            }
          )}
        >
          <Link className="hover:opacity-70" href="#home">
            Home
          </Link>
          <Link className="hover:opacity-70" href="#green-energy">
            green energy
          </Link>
          <Link className="hover:opacity-70" href="#case-study">
            case study
          </Link>
          <Link className="hover:opacity-70" href="#projects">
            projects
          </Link>
        </ul>

        <Button
          variant="outline"
          size="lg"
          className={cn('hidden md:block rounded-full px-4', {
            'text-white bg-black': targetContainer,
            'text-black': !targetContainer,
          })}
        >
          Become a Partner
        </Button>
        <motion.div
          className="bg-white md:hidden absolute top-0 left-0 bottom-0 h-screen w-[300px]"
          variants={sidebar}
        >
          <MobileNav />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

export default Nav;
