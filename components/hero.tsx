import { ArrowDownIcon } from '@radix-ui/react-icons';

const Hero = () => {
  return (
    <section className="relative bg-hero-img bg-cover bg-no-repeat grid grid-cols-2 grid-rows-[2.5fr_1fr] h-screen">
      <div className="container mx-auto px-4 sm:px-10 md:px-0 col-start-1 col-end-3 row-start-2 row-end-3">
        <div className="uppercase text-white flex flex-col">
          <div className="flex flex-col xl:flex-row relative text-6xl xl:text-9xl font-bold justify-between">
            <h1>future</h1>
            <p className="flex basis-2/12 xl:mx-6 border-b-[3px] xl:border-b-[10px] items-center justify-center -translate-y-[10%] lg:-translate-y-[45%]" />
            <h1>Solution</h1>
          </div>
          <div className="flex items-start justify-between text-wrap py-6">
            <div className="text-xs md:text-base ">
              <p>Be part of the global shift towards clean,</p>
              <p>sustainable energy sources.</p>
            </div>
            <div className="flex items-center gap-x-1 self-end">
              <p className="text-xs md:text-base capitalize">explore more</p>
              <ArrowDownIcon className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
