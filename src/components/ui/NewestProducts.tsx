import Image from 'next/image';
import React from 'react';
import ButtonIcon from './ButtonIcont';
import { Icon } from '@iconify/react/dist/iconify.js';
import { newProductStr } from '@/string/string';
import NewestProductsImage from './NewestProductsImage';

function NewestProducts() {
  return (
    <section className="container mb-8 h-[462px]">
      <Image
        src={'/images/Vector 7.png'}
        alt="vector"
        fill
        className="w-full top-full"
      />

      <div className="container flex items-end justify-center gap-8 h-full relative z-10">
        <NewestProductsImage
          src="/images/new-pro2.jpg"
          label={newProductStr.pumaBrand}
        />
        <NewestProductsImage
          src="/images/new-pro1.jpg"
          label={newProductStr.nickBrand}
        />

        <div className="w-[300px] flex flex-col justify-between gap-2">
          <h2 className="text-lg font-bold text-secondary-950">
            {newProductStr.newProduct}
          </h2>
          <p className="text-sm text-gray-600 w-2xs">{newProductStr.desc}</p>
          <ButtonIcon
            variant="outline"
            aria-label="Show new products"
            className="py-2 px-4 mt-4 cursor-pointer bg-primary-950 text-white w-full h-12"
          >
            <Icon
              icon="hugeicons:circle-arrow-right-02"
              width="20"
              height="20"
            />
            {newProductStr.showProductBtn}
          </ButtonIcon>
        </div>
      </div>
    </section>
  );
}

export default NewestProducts;
