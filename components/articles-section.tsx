'use client';
import Image from 'next/image';
import SectionTitle from './section-title';
import { useState } from 'react';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

const articles = [
  {
    id: 1,
    img: '/paisage1.webp',
    date: 'June 01, 2024',
    bannerText:
      'Simple changes, such as using energy-efficient appliance, reducing water usage, and incorporating renewable energy sources like solar panels into your home, can make a significant difference.',
    title: 'Sustainable Living Tips',
    content:
      'Discover practical and effective ways to lead a more eco-friendly lifestyle. From reducing waste and conserving energy to embracing renewable resources and making mindful consumption choices, these tips provide actionable steps to help you minimize your environmental impact. Whether you are at home, in the garden, or on the go, learn how small changes can contribute to a healthier planet and a more sustainable future for all',
  },
  {
    id: 2,
    img: '/paisage2.webp',
    date: 'August 11, 2024',
    bannerText:
      'The future of renewable energy is bright. As technology advances, we are finding new and innovative ways to harness the power of the sun, wind, and water to create clean, sustainable energy sources.',
    title: 'Innovative Energy Storage Solutions',
    content:
      "Learn about the latest advancements in energy storage technology and how they're revolutionizing the way we power our world. From lithium-ion batteries and hydrogen fuel cells to flywheels and compressed air storage, discover the cutting-edge solutions that are making renewable energy more reliable, efficient, and affordable than ever before.",
  },
  {
    id: 3,
    img: '/paisage3.webp',
    date: 'October 22, 2024',
    bannerText:
      'Renewable energy is the key to a sustainable future. By harnessing the power of the sun, wind, and water, we can reduce our reliance on fossil fuels and create a cleaner, greener world for future generations.',
    title: 'Bioenergy Breakthroughs',
    content:
      "Explore the latest advancements in bioenergy technology and how they're transforming the way we produce and consume energy. From biofuels and biogas to biomass and biochar learn how these innovative solutions are helping to reduce greenhouse gas emissions, combat climate change, and create a more sustainable future for all.",
  },
  {
    id: 4,
    img: '/paisage4.webp',
    date: 'December 03, 2024',
    bannerText:
      'Renewable energy is the future of power. As the world transitions away from fossil fuels, we are turning to clean, sustainable sources like solar, wind, and hydropower to meet our energy needs.',
    title: "Harnessing Nature's Energy",
    content:
      "Discover how we're harnessing the power of nature to create clean, sustainable energy sources. From solar panels and wind turbines to hydroelectric dams and geothermal power plants, learn how these innovative technologies are helping to reduce our carbon footprint, combat climate change, and build a more sustainable future for all.",
  },
];

const Articles = () => {
  const [articleIndex, setArticleIndex] = useState(0);
  return (
    <section className="container mx-auto h-screen mt-20">
      <SectionTitle
        title="Articles & blog"
        sup="04"
        link="suergy.org"
        date={2024}
      />
      <h1 className="py-10 text-3xl md:text-5xl font-semibold">
        Renewable energy <br /> innovations and insights.
      </h1>
      <div className="grid md:grid-cols-[1.8fr_3fr] gap-x-10">
        <Image
          src={articles[articleIndex].img}
          width={1024}
          height={1024}
          alt={articles[articleIndex].title}
          className="rounded-xl"
        />
        <div className="grid grid-cols-4 grid-rows-[1fr_1fr_2fr]">
          <div className="col-span-full">
            <p>{articles[articleIndex].date}</p>
            <h2 className="mt-2 text-gray-400 text-xl">
              {articles[articleIndex].bannerText}
            </h2>
          </div>

          <div className="col-span-full self-end">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">
                {articles[articleIndex].title}
              </h1>
              {/* <p className="uppercase text-sm text-nowrap">[Read More]</p> */}
            </div>
            <Separator className="bg-black h-0.5 mt-1" />
          </div>

          <div className="col-start-2 col-end-5">
            {articles.map((article, index) => (
              <div key={article.id}>
                <div
                  onClick={() => setArticleIndex(index)}
                  className="flex items-center justify-between mt-4 cursor-pointer"
                >
                  <p className="text-lg font-semibold text-gray-400">
                    {article.title}
                  </p>
                  <p className="uppercase text-sm text-nowrap">[Read More]</p>
                </div>
                <Separator
                  className={cn('my-4', {
                    hidden: articles.indexOf(article) === articles.length - 1,
                  })}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
