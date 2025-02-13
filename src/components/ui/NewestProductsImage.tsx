import Image, { StaticImageData } from 'next/image';

type TImageType = {
  src: string | StaticImageData;
  label: string;
};

const NewestProductsImage = ({ src, label }: TImageType) => (
  <div className="relative z-10 cursor-pointer">
    <Image
      src={src}
      alt={label}
      width={292}
      height={462}
      priority
      className="rounded-xl h-full w-full object-contain"
    />
    <div className="absolute w-full bottom-0">
      <Image
        src="/images/bluevector.png"
        alt="background vector"
        width={292}
        height={200}
        className="rounded-xl h-full w-full object-contain"
        loading="lazy"
      />
      <p className="absolute bottom-10 text-white right-6 text-base w-[230px]">
        {label}
      </p>
    </div>
  </div>
);

export default NewestProductsImage;
