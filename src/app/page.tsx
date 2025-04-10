import Slider from '@/components/ui/Slider';
import NewestProducts from '@/components/ui/NewestProducts';
import SportBanner from '@/components/ui/SportBanner';
import Image from 'next/image';
import { headerStr, newProductStr, sliderStr } from '@/string/string';
import ButtonIcon from '@/components/ui/ButtonIcont';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import { newShoes, specialOffer, sportOffer } from '@/data/sliderDatas';
import NewsCards from '@/components/ui/NewsCards';

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

      <section className="container mb-10">
        <h2 className="text-center text-secondary-800 font-semibold text-3xl">
          {sliderStr.title}
        </h2>
        <Slider contentItems={specialOffer} sliderId="specialOffer" />
      </section>

      <section className="mb-10 bg-primary-10">
        <div className="relative top-5 text-center">
          <h2 className="absolute text-center w-96 h-16 left-1/2 transform -translate-x-1/2 p-2 -top-10 m-auto text-secondary-800 font-semibold text-3xl mb-10 bg-white rounded-2xl">
            {sliderStr.newShoes}
          </h2>
        </div>
        <Slider contentItems={newShoes} sliderId="newShoes" />
      </section>

      <section className="mb-20 mt-14 relative">
        <Image
          src={'/images/cycle-banner.png'}
          alt="image"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-44 right-32">
          <Typography
            variant="subtitle1"
            className="mb-1 font-display font-light"
          >
            {headerStr.cycleBannerTitle}
          </Typography>
          <Typography variant="h5" className="font-display font-bold">
            {headerStr.cycleBannerDesc}
          </Typography>

          <ButtonIcon
            variant="outline"
            className="py-2 px-4 mt-4 h-12 border-none cursor-pointer bg-secondary-950 text-white"
          >
            <Icon
              icon="hugeicons:circle-arrow-right-02"
              width="20"
              height="20"
            />
            {newProductStr.showProductBtn}
          </ButtonIcon>
        </div>
      </section>

      <section className="mb-10 bg-secondary-0">
        <div className="relative top-5 text-center">
          <h2 className="absolute text-center w-2xs left-1/2 transform -translate-x-1/2 p-2 -top-10 m-auto text-secondary-800 font-semibold text-3xl bg-white rounded-2xl">
            {sliderStr.title}
          </h2>
        </div>
        <Slider contentItems={sportOffer} sliderId="sportOffer" />
      </section>

      <NewestProducts />

      <section className="mb-8 mt-14">
        <Image
          src={'/images/green-banner.png'}
          alt="image"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </section>

      <NewsCards />

      <section className="mb-8 mt-14">
        <Image
          src={'/images/Before Footer.png'}
          alt="image"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          quality={100}
        />
      </section>
    </div>
  );
}
