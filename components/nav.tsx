'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useTrackingScrollContext } from '@/context/TrackingScrollContext';
import { cn } from '@/lib/utils';

const Nav = () => {
  const { targetContainer } = useTrackingScrollContext();

  return (
    <div className="fixed text-3xl w-full z-50 pt-10 pb-4 backdrop-blur-sm border-b border-white/10">
      <nav className="flex items-center justify-between container px-4 sm:px-10 md:px-0 mx-auto">
        <div className="flex items-center gap-4">
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
        </div>

        <ul
          className={cn(
            'md:flex hidden lg:text-base md:text-xs uppercase gap-x-4',
            {
              'text-black': targetContainer,
              'text-white': !targetContainer,
            }
          )}
        >
          <Link href="#home">Home</Link>
          <Link href="#green-energy">green energy</Link>
          <Link href="#case-study">case study</Link>
          <Link href="#projects">projects</Link>
        </ul>

        <Button
          variant="outline"
          size="lg"
          className={cn(' rounded-full px-4', {
            'text-white bg-black': targetContainer,
            'text-black': !targetContainer,
          })}
        >
          Become a Partner
        </Button>
      </nav>
    </div>
  );
};

export default Nav;
