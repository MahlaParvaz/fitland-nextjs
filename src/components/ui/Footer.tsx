import React from 'react';
import Image from 'next/image';
import FooterLinkSection from './FooterLinkSection';
import SocialMediaSection from './SocialMediaSection';
import NewsletterForm from './NewsletterForm';

function Footer() {
  const popularLinks = ['لباس مردانه', 'کفش فوتبال', 'دوچرخه', 'لباس زنانه'];

  const customerServiceLinks = [
    'سوالات متداول',
    'حریم خصوصی',
    'گزارش ایراد در سایت',
    'شرایط بازگرداندن محصول',
  ];

  const shoppingGuideLinks = [
    'راخنمای ثبت سفارش',
    'شیوه های پرداخت',
    'نحوه ارسال سفارش ها',
    'نحوه پیگیری محصول',
  ];

  const contactInfoLinks = [
    'نشانی تهران - تجریش - خیابان سالور',
    'شماره تماس 3456789-021',
    'پست الکترونیک info@fitland.com',
    'ساعت کاری شنبه تا چهارشنبه 9 تا 17',
  ];

  return (
    <div className="flex flex-col bg-secondary-700 text-white">
      <div className="container flex items-center justify-center">
        <div className="flex flex-1 py-8 items-center justify-around">
          <FooterLinkSection title="محبوب ترین ها" links={popularLinks} />
          <FooterLinkSection
            title="خدمات مشتریان"
            links={customerServiceLinks}
          />
          <FooterLinkSection title="راهنمای خرید" links={shoppingGuideLinks} />
          <FooterLinkSection title="اطلاعات تماس" links={contactInfoLinks} />
        </div>
        <div className="flex flex-col items-start justify-evenly gap-4 p-4">
          <SocialMediaSection />
          <NewsletterForm />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-3xl p-4">
          <p className="text-base mb-4">فروشگاه اینترنتی فیت‌لند</p>
          <span className="text-sm w-3xs">
            فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای
            آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال،
            فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات
            سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با
            مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند
            دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات
            خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی،
            با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار
            می دهد.
          </span>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex items-center justify-between gap-4">
            <Image alt="enamad" src={'/images/01.png'} width={80} height={80} />
            <Image alt="enamad" src={'/images/02.png'} width={80} height={80} />
            <Image alt="enamad" src={'/images/03.png'} width={80} height={80} />
          </div>
          <span className="text-sm font-bold">یک هفته ضمانت بازگشت ✍</span>
        </div>
      </div>
      <hr className="bg-gray-100 mb-2" />
      <div className="flex items-start justify-between text-xs mb-4 text-gray-300 container">
        <p>
          تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد.
        </p>
        <p>طراحی شده توسط گروه 8 دوره طراحی رابط کاربری احسان عزتی</p>
      </div>
    </div>
  );
}

export default Footer;
