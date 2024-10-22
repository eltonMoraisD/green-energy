import SectionTitle from './section-title';

const SustainableSection = () => {
  return (
    <section className="mt-10 container mx-auto h-screen">
      <SectionTitle
        sup="02"
        title="Benefits"
        link="suergy.org"
        date={new Date().getFullYear()}
      />
      <div className="grid grid-cols-[1.5fr_1fr] py-10">
        <h1 className="text-3xl md:text-5xl font-semibold col-span-1">
          Sustainable and thriving <br /> future for our planet.
        </h1>
        <p className="col-span-1 uppercase place-content-end">
          Renewable energy sources offer numerous advantages that contribute to
          a sustainable and thriving future for our planet hriving future for
          our planet.{' '}
        </p>
      </div>
    </section>
  );
};

export default SustainableSection;
