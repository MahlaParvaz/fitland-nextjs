import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

type FooterLinkSectionProps = {
  title: string;
  links: string[];
};

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <span className="font-bold text-lg">{title}</span>
      <ul className="flex flex-col gap-2 mt-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-sm cursor-pointer flex items-center justify-start gap-2"
          >
            <Icon icon="prime:circle-fill" width="10" height="10" />
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkSection;
