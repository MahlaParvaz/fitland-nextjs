import { headerStr } from '@/string/string';
import Image from 'next/image';
import React from 'react';
import Search from './Search';
import { Icon } from '@iconify/react/dist/iconify.js';
import { toPersianNumbers } from '@/utils/toPersianNumbers';

function Header() {
  return (
    <>
      <p className="bg-secondary-950 w-full h-10 text-white flex justify-center items-center sticky top-0 text-xs">
        {headerStr.miniTitle}
      </p>
      <header className="container xl:max-w-screen-xl bg-amber-100">
        <nav className="w-full">
          <ul className="flex gap-8 items-center justify-between  bg-red-50">
            <li className="flex-1">
              <Image
                src={'/images/logo.svg'}
                alt="fitland logo"
                width={150}
                height={32}
                className="h-12 w-32 object-contain "
              />
              <span className="text-[11px]">{headerStr.logo}</span>
            </li>
            <li className="w-2xl">
              <Search />
            </li>
            <li className="flex-1 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 justify-center p-2  bg-white drop-shadow-lg rounded-xl cursor-pointer">
                <span className="text-sm">
                  {headerStr.signup} | {headerStr.signin}
                </span>
                <Icon
                  icon="hugeicons:user"
                  width="22"
                  height="22"
                  className="mr-4"
                />
              </div>
              <div className="relative p-2 bg-primary-950 rounded-xl text-white cursor-pointer ">
                <span className="absolute -top-1 -left-1.5 shadow-lg bg-secondary-950 flex items-center justify-center rounded-full p-1 w-4 h-4">
                  {toPersianNumbers(0)}
                </span>
                <Icon icon="hugeicons:shopping-bag-03" width="20" height="20" />
              </div>
            </li>
          </ul>
        </nav>
        Header
      </header>
    </>
  );
}

export default Header;
