import React from 'react';
import Slider from './Slider';
import { ContentItem } from '@/types/slider';

type SliderSectionProps = {
  title: string;
  contentItems: ContentItem[];
  sliderId: string;
  className?: string;
  titleClassName?: string;
};

const SliderSection: React.FC<SliderSectionProps> = ({
  title,
  contentItems,
  sliderId,
  className = '',
  titleClassName = 'text-center text-secondary-800 font-semibold text-3xl',
}) => {
  return (
    <section className={`container mb-10 ${className}`}>
      <h2 className={titleClassName}>{title}</h2>
      <Slider contentItems={contentItems} sliderId={sliderId} />
    </section>
  );
};

export default SliderSection;
