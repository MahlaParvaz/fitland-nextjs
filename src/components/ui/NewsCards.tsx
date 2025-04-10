import Image from 'next/image';
import React from 'react';
import ButtonIcon from './ButtonIcont';
import { Icon } from '@iconify/react/dist/iconify.js';

function NewsCards() {
  return (
    <div className="container">
      <h2 className="text-center mb-8 font-bold text-3xl">
        جدیدترین ها در اخبار ورزش
      </h2>
      <div className="flex items-center justify-evenly gap-10 ">
        {cardItems.map((item, index) => {
          return (
            <div key={index} className="w-lg border border-gray-600 rounded-lg">
              <Image
                src={item.src}
                alt="image"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-tr-lg rounded-tl-lg"
                quality={100}
              />
              <div className="flex flex-col gap-4 p-4">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-base">{item.desc}</p>
              </div>
              <ButtonIcon
                variant="outline"
                className="py-2 px-4 mt-4 mr-4 mb-4 h-12 border-none cursor-pointer bg-primary-600 text-white"
              >
                <Icon
                  icon="hugeicons:circle-arrow-right-02"
                  width="20"
                  height="20"
                />
                مشاهده خبر
              </ButtonIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCards;

const cardItems = [
  {
    src: '/images/sport-news.png',
    title: 'افزایش دریافتی فوتبالیست هاو معافیت از سربازی',
    desc: ' خبرها حاکی از آن است که رئیس فدراسیون فوتبال اعلام کرد در فصل جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند وی گف..',
  },
  {
    src: '/images/sport-news-2.png',
    title: 'شکست استرالیا در گام نخست جام جهانی فوتبال زنان!',
    desc: 'تیم‌ها در روز اول مسابقات جام جهانی فوتبال زنان در شهر مادرید اسپانیا با یکدیگر به رقابت پرداختند.',
  },
];
