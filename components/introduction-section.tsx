'use client';

import { useState } from 'react';
import { PiSolarPanel } from 'react-icons/pi';
import { MdWindPower } from 'react-icons/md';
import { GiHydraShot } from 'react-icons/gi';
import { SiGeopandas } from 'react-icons/si';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import SectionTitle from './section-title';

const energieType = [
  {
    id: 3465756843231,
    title: 'Solar Energy',
    description:
      'Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar panels.',
    Icon: (
      <PiSolarPanel className="size-6 md:size-7 mt-2 group-hover:fill-white" />
    ),
    img: '/solar1.webp',
  },
  {
    id: 2345326121,
    title: 'Wind Energy',
    description:
      'Wind energy is the use of air flow through wind turbines to provide the mechanical power to turn electric generators.',
    Icon: (
      <MdWindPower className="size-6 md:size-7 mt-2 group-hover:fill-white" />
    ),
    img: '/eolic2.webp',
  },
  {
    id: 3353564366212,
    title: 'Hydro Energy',
    description:
      'Hydro energy is the use of water flow through turbines to provide the mechanical power to turn electric generators.',
    Icon: (
      <GiHydraShot className="size-6 md:size-7 mt-2 group-hover:fill-white" />
    ),
    img: '/hidro.webp',
  },
  {
    id: 235346224,
    title: 'Geothermal Energy',
    description:
      'Geothermal energy is the heat from the Earth. It is clean and sustainable.',
    Icon: (
      <SiGeopandas className="size-6 md:size-7 mt-2 group-hover:fill-white" />
    ),
    img: '/geotermal.webp',
  },
];

const Introduction = () => {
  const [energieTypeIndex, setEnergieTypeIndex] = useState(0);

  return (
    <section className="px-4 container mx-auto mt-10">
      <SectionTitle
        sup="01"
        title="Introduction"
        link="suergy.org"
        date={new Date().getFullYear()}
      />

      <h1 className="py-10 text-3xl md:text-5xl font-semibold">
        Promoting new energy <br /> technologies and solutions.
      </h1>
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-6 gap-4">
        <Image
          src={energieType[energieTypeIndex].img}
          alt={energieType[energieTypeIndex].title}
          width={500}
          height={200}
          className="w-full h-[500px] md:row-span-3 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 rounded-xl "
        />

        {energieType.map((item, index) => (
          <div
            key={item.id}
            className="cursor-pointer "
            onClick={() => setEnergieTypeIndex(index)}
          >
            <div
              className={cn(
                'flex flex-col h-full w-full justify-between border rounded-xl hover:bg-gray-900 group hover:rounded-xl  p-4',
                {
                  'bg-gray-900 rounded-xl text-white px-4 pt-4':
                    energieTypeIndex === index,
                }
              )}
            >
              <div className="">
                <h2 className="font-semibold group-hover:text-white">
                  {item.title}
                </h2>
                <span>{item.Icon}</span>
              </div>

              {energieTypeIndex === index ? (
                <p className="hidden md:inline-block pb-10 text-gray-500 text-sm group-hover:text-gray-300">
                  {item.description}
                </p>
              ) : (
                <span className="hidden md:block text-gray-400 pb-10">
                  [view details]
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
