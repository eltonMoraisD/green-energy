import Carousel from './carousel';
import SectionTitle from './section-title';

const natureData = [
  {
    id: 54573412121,
    img: '/nature1.webp',
    title: 'Environmental Benefits',
    description:
      'Switching to renewable energy reduces carbon emissions and pollutants, mitigating climate change and improving air quality.',
  },
  {
    id: 22423235466767,
    img: '/nature2.webp',
    title: 'Economic Benefits',
    description:
      'Renewable energy creates jobs, reduces energy costs, and stabilizes energy prices, providing economic benefits.',
  },
  {
    id: 2222212345233,
    img: '/nature3.webp',
    title: 'Health Benefits',
    description:
      'Renewable energy reduces health risks associated with air and water pollution, improving public health and quality of life.',
  },
  {
    id: 47895632,
    img: '/nature4.webp',
    title: 'Social Benefits',
    description:
      'Renewable energy promotes energy independence, energy security, and energy access, providing social benefits.',
  },
];

const SustainableSection = () => {
  return (
    <div className="">
      <section className="mt-10 container mx-auto px-4">
        <SectionTitle
          sup="02"
          title="Benefits"
          link="suergy.org"
          date={new Date().getFullYear()}
        />
        <div className="grid md:grid-cols-[1.5fr_1fr] py-10">
          <h1 className="text-3xl md:text-5xl font-semibold col-span-1">
            Sustainable and thriving <br /> future for our planet.
          </h1>
          <p className="col-span-1 uppercase place-content-end text-xs md:text-xs lg:text-base mt-4 md:mt-0">
            Renewable energy sources offer numerous advantages that contribute
            to a sustainable and thriving future for our planet hriving future
            for our planet.{' '}
          </p>
        </div>
      </section>
      <Carousel natureData={natureData} />
    </div>
  );
};

export default SustainableSection;
