'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { PiArrowLeft } from 'react-icons/pi';
import { ArrowRightIcon } from '@radix-ui/react-icons';

type CarouselProps = {
  natureData: {
    id: number;
    img: string;
    title: string;
    description: string;
  }[];
};

const Carousel = ({ natureData }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="">
      <div className="relative">
        <Image
          src={natureData[index].img}
          alt="carousel"
          width={1920}
          height={1080}
          className="w-full h-[600px] md:h-[700px] brightness-50 object-cover"
        />
        <div className="">
          <div className="flex flex-col p-3 md:p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[50%] lg:w-[35%] xl:w-[30%] bg-white rounded-xl">
            <Image
              src={natureData[index].img}
              width={1792}
              height={1024}
              alt={natureData[index].title}
              className="rounded-xl "
            />
            <h2 className="font-semibold text-lg md:text-xl capitalize py-4">
              {natureData[index].title}
            </h2>
            <p className="text-ellipsis text-sm text-gray-500 mb-4">
              {natureData[index].description}
            </p>
          </div>
        </div>
        <div className="relative flex justify-between bottom-10 lg:bottom-20  w-full container mx-auto">
          <Button
            variant="ghost"
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? natureData.length - 1 : prev - 1
              )
            }
            className="text-white hover:bg-transparent hover:text-white/80 uppercase font-semibold  sm:text-base md:text-lg"
          >
            <PiArrowLeft className="md:!size-6 !font-bold" /> Previous
          </Button>

          <Button
            variant="ghost"
            className="text-white hover:bg-transparent hover:text-white/80 uppercase font-semibold sm:text-base md:text-lg"
            onClick={() =>
              setIndex((prev) =>
                prev === natureData.length - 1 ? 0 : prev + 1
              )
            }
          >
            Next <ArrowRightIcon className="md:!size-6 !font-bold" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
