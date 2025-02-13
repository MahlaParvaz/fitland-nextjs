import Image from 'next/image';
import React from 'react';
import { headerStr } from '@/string/string';
import { Typography } from '@mui/material';
import ButtonIcon from './ButtonIcont';
import { Icon } from '@iconify/react/dist/iconify.js';

function SportBanner() {
  return (
    <div className="relative mt-4">
      <div className="absolute w-80 right-16 top-4">
        <Typography
          variant="subtitle2"
          className="text-gray-600 mb-4 font-display"
        >
          {headerStr.bannerText}
        </Typography>
        <Typography
          variant="h5"
          className="text-gray-700 mb-8 font-display font-bold"
        >
          {headerStr.bannerTitle}
        </Typography>
        <Typography
          variant="h5"
          className="text-primary-950 mb-8 font-display font-bold"
        >
          {headerStr.bannerBigTitle}
        </Typography>
        <Typography variant="subtitle2" className="text-gray-600 font-display">
          {headerStr.bannerDesc}
        </Typography>

        <ButtonIcon
          variant="outline"
          className="py-2 px-4 mt-4 cursor-pointer bg-secondary-950 text-white"
        >
          <Icon icon="hugeicons:circle-arrow-right-02" width="20" height="20" />
          {headerStr.bennerBtn}
        </ButtonIcon>
      </div>
      <div>
        <Image
          src={'/images/running-banner.png'}
          alt="banner"
          width={422}
          height={475}
          className="flex z-50 m-auto mb-11"
        />
        <Image
          src={'/images/dot-banner.png'}
          alt="banner"
          width={1439}
          height={106}
          className="-mt-20 z-0"
        />
      </div>
      <div className="absolute w-80 left-16 top-4">
        <Image
          src={'/images/banner-detail.png'}
          alt="banner detail"
          width={222}
          height={288}
          quality={90}
          className=" object-contain"
        />
      </div>
    </div>
  );
}

export default SportBanner;
