import Hero from '@/components/hero';
import IntroductionSection from '@/components/introduction-section';
import SustainableSection from '@/components/sustainable-section';

// layout link - https://dribbble.com/shots/24452271-SUERGY-Renewable-Energy-Landing-Page
export default function Home() {
  return (
    <main>
      <Hero />
      <IntroductionSection />
      <SustainableSection />
    </main>
  );
}
