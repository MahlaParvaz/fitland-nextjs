import Slider from '@/components/ui/Slider';
import NewestProducts from '@/components/ui/NewestProducts';
import SportBanner from '@/components/ui/SportBanner';
import Image from 'next/image';
import { sliderStr } from '@/string/string';

export default function Home() {
  return (
    <div>
      <SportBanner />
      <NewestProducts />
      <section className="mb-8 mt-14">
        <Image
          src={'/images/pinky-banner.png'}
          alt="image"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </section>
      <div className="container">
        <h2 className="text-center text-secondary-800 font-semibold text-3xl">
          {sliderStr.title}
        </h2>
        <Slider />
      </div>
    </div>
  );
}
