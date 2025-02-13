import NewestProducts from '@/components/ui/NewestProducts';
import SportBanner from '@/components/ui/SportBanner';
import Image from 'next/image';

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
    </div>
  );
}
