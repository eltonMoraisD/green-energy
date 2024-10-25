'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { PiArrowRight } from 'react-icons/pi';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';
import { useTrackingScrollContext } from '@/context/TrackingScrollContext';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const farmContent = [
  {
    id: 123523456,
    title: 'Wind Farm Development',
    country: 'Netherlands',
    year: '2024',
    tags: [
      {
        id: 123,
        name: 'Windmill',
      },
      {
        id: 1234,
        name: 'Clean Energy',
      },
    ],
  },
  {
    id: 234566322,
    title: 'Hydro Energy Projects',
    country: 'United States',
    year: '2023',
    tags: [
      {
        id: 12345,
        name: 'Hydro Power',
      },
      {
        id: 123456,
        name: 'Clean Energy',
      },
    ],
  },
  {
    id: 531241543,
    title: 'Smart Grid Technology',
    country: 'Germany',
    year: '2022',
    tags: [
      {
        id: 1234567,
        name: 'Renewable Integration',
      },
      {
        id: 123456789,
        name: 'Clean Energy',
      },
    ],
  },
];

const Projects = () => {
  const { ref, setTargetContainer } = useTrackingScrollContext();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 95px', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (scrollYProgress.get() > 0) {
      setTargetContainer(true);
    } else {
      setTargetContainer(false);
    }
  });
  return (
    <section id="projects" ref={ref} className="container mx-auto px-4">
      <h1 className="pb-10 text-4xl md:text-6xl font-semibold uppercase text-end">
        our projects
      </h1>
      <div className="grid md:grid-cols-3 gap-x-6">
        <h2 className="text-lg capitalize font-semibold">
          Solar Village initiative
        </h2>
        <div className="flex w-full justify-between">
          <p className="text-gray-400">Mexico</p>
          <p className="text-gray-400">{new Date().getFullYear()}</p>
        </div>
        <div className="flex flex-row items-center justify-end gap-x-2">
          <p className="text-xs bg-black rounded-full text-white px-3 py-1.5">
            Solar System
          </p>
          <p className="text-xs bg-black rounded-full text-white px-3 py-1.5">
            Clean energy
          </p>
        </div>
        <Image
          src="/village1.webp"
          width={500}
          height={300}
          alt=""
          className="rounded-xl mt-6 w-full"
        />
        <Image
          src="/village2.webp"
          width={500}
          height={300}
          alt=""
          className="rounded-xl mt-6 w-full"
        />
        <Image
          src="/village3.webp"
          width={500}
          height={300}
          alt=""
          className="rounded-xl mt-6 w-full"
        />
      </div>
      <div className="grid md:grid-cols-3 mb-2">
        <p className="col-span-2 mt-6 text-xs md:text-sm lg:text-base text-gray-400">
          Our Solar City project aims to create a community powered entirely by
          solar energy. By installing solar panels on residential and commercial
          buildings, we can provide clean, renewable energy to thousands of
          households
        </p>
        <Button
          className="hover:bg-transparent hover:text-gray-700 text-base uppercase p-0 self-end justify-end"
          variant="ghost"
        >
          Learn more
          <PiArrowRight className="!size-5" />
        </Button>
      </div>
      <Separator className="mb-10" />

      {farmContent.map((content) => (
        <div key={content.id} className="grid md:grid-cols-3 gap-x-6 mt-6">
          <h2 className="text-lg lg:text-2xl capitalize font-semibold">
            {content.title}
          </h2>
          <div className="flex w-full justify-between">
            <p className="text-gray-400">{content.country}</p>
            <p className="text-gray-400">{content.year}</p>
          </div>
          <div className="flex flex-row items-center justify-end gap-x-2">
            {content.tags.map((tag) => (
              <p
                key={tag?.id}
                className="text-xs bg-gray-200 rounded-full text-black px-3 py-1.5 text-nowrap truncate"
              >
                {tag.name}
              </p>
            ))}
          </div>
          <Separator
            className={cn('col-span-full mt-6', {
              hidden: farmContent.indexOf(content) === farmContent.length - 1,
            })}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;
