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

type ContentItem = {
  imageSrc: string;
  title: string;
  price: string;
  size: string;
};
type SliderProps = {
  contentItems: ContentItem[];
  sliderId: string;
};

const Slider = ({ contentItems, sliderId }: SliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="container mx-auto py-8 mb-4 w-full max-w-6xl">
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
          spaceBetween={40}
          navigation={{
            prevEl: `.swiper-button-prev-${sliderId}`,
            nextEl: `.swiper-button-next-${sliderId}`,
            enabled: true,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {contentItems.map((slideContent: ContentItem, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-between w-full cursor-pointer  bg-white rounded-xl border ">
                  <Image
                    src={slideContent.imageSrc}
                    alt={slideContent.title}
                    width={366}
                    height={280}
                    className="object-cover w-full h-full"
                    priority={index < 2}
                  />
                  <div className="flex flex-col gap-4 h-full w-full p-2 mt-3">
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
          className={`swiper-button-prev swiper-button-prev-${sliderId}`}
          onClick={() => swiperRef.current?.slidePrev()}
        ></div>
        <div
          className={`swiper-button-next swiper-button-next-${sliderId}`}
          onClick={() => swiperRef.current?.slideNext()}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
