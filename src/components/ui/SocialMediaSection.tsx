import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

type SocialMediaSectionProps = {
  title?: string;
  className?: string;
};

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  title = 'برای دریافت تخفیف های بیشتر ما را دنبال کنید!',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-between gap-5 ${className}`}
    >
      <p className="text-sm font-bold">{title}</p>
      <div className="flex w-full items-start justify-between">
        <Icon icon="mdi:instagram" width="24" height="24" />
        <Icon icon="ri:telegram-2-fill" width="24" height="24" />
        <Icon icon="ic:outline-whatsapp" width="24" height="24" />
        <Icon icon="si:youtube-fill" width="24" height="24" />
      </div>
    </div>
  );
};

export default SocialMediaSection;
