'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Icon } from '@iconify/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import '@/styles/slider.css';
import { useRef } from 'react';
import { toPersianNumbersWithComma } from '@/utils/toPersianNumbers';
import { sliderStr } from '@/string/string';

const ContentItems = [
  {
    imageSrc: '/images/nicky-jumper.jpg',
    title: 'سوشرت نایک مدل AO-14',
    price: '300000 هزار تومان',
    size: 'از سایز L تا XXL',
  },
  {
    imageSrc: '/images/nicky-set-girl.png',
    title: 'سوشرت نایک مدل AO-14',
    price: '300000 هزار تومان',
    size: 'از سایز L تا XXL',
  },
  {
    imageSrc: '/images/shoes-3.png',
    title: 'کفش نایک مدل S-2000',
    price: '300000 هزار تومان',
    size: 'از سایز L تا XXL',
  },
  {
    imageSrc: '/images/nicky-set-girl.png',
    title: 'تی شرت نایک مدل 1830',
    price: '300000 هزار تومان',
    size: 'از سایز L تا XXL',
  },
];

const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mx-auto py-8 mb-4 w-full">
      <div className="flex justify-end items-center mb-4">
        <button className="w-32 flex items-center justify-center gap-2 cursor-pointer text-secondary-800 font-semibold text-base">
          <Icon icon="solar:round-arrow-left-linear" className="w-5 h-5" />
          <span className="text-secondary-800 font-semibold text-lg ">
            {sliderStr.showAll}
          </span>
        </button>
      </div>
      <div className="relative">
        <div className="slider-blur" />
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            enabled: true,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ContentItems.map((slideContent, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-between h-full w-full cursor-pointer">
                  <Image
                    src={slideContent.imageSrc}
                    alt={slideContent.title}
                    width={366}
                    height={280}
                    className="object-cover w-full h-auto"
                    priority={index < 2}
                  />
                  <div className="flex flex-col justify-between h-full w-full gap-2 p-2 mt-3">
                    <p className="font-medium text-base">
                      {slideContent.title}
                    </p>
                    <span className="text-primary text-sm">
                      {toPersianNumbersWithComma(slideContent.price)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {slideContent.size}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev"
          onClick={() => swiperRef.current?.slidePrev()}
        ></div>
        <div
          className="swiper-button-next"
          onClick={() => swiperRef.current?.slideNext()}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
