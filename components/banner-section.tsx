import Image from 'next/image';
import { Button } from './ui/button';
import { PiArrowRight } from 'react-icons/pi';

const Banner = () => {
  return (
    <section className="mt-20">
      <div className="relative">
        <Image
          src={'/pound.webp'}
          width={1792}
          height={1024}
          alt="banner"
          className="w-full h-[600px] md:h-[700px] brightness-50 object-cover"
        />
        <div className="absolute left-0 right-0 top-0 container mx-auto grid lg:grid-cols-[2fr_1.5fr] px-4 h-full pt-20">
          <h2 className="text-white uppercase text-7xl md:text-8xl font-bold">
            get involved
          </h2>
          <div className="place-content-center space-y-10">
            <h2 className="text-white text-4xl">
              Be Part of the
              <br />
              Global Movement
            </h2>
            <p className="text-white max-w-96">
              By choosing renewable energy, you can help reduce carbon
              emissions, lower energy costs, and support innovative solutions
              that benefit our planet.
            </p>
            <Button className="bg-white text-black rounded-full px-3 py-6 hover:bg-white/90">
              Join Now
              <span className="bg-black rounded-full p-2">
                <PiArrowRight className="!text-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
