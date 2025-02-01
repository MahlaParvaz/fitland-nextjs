import { headerStr } from '@/string/string';
import Image from 'next/image';
import React from 'react';
import Search from './Search';
import { Icon } from '@iconify/react/dist/iconify.js';

function Header() {
  return (
    <>
      <p className="bg-secondary-secondary w-full h-10 text-white flex justify-center items-center sticky top-0 text-xs">
        {headerStr.miniTitle}
      </p>
      <header className="container xl:max-w-screen-xl">
        <nav className="w-full">
          <ul className="flex gap-8 items-center justify-between  bg-red-50">
            <li className="flex-1">
              <Image
                src={'/images/logo.svg'}
                alt="fitland logo"
                width={150}
                height={32}
              />
              <span className="text-xs">{headerStr.logo}</span>
            </li>
            <li className="bg-red-800 flex-1">
              <Search />
            </li>
            <li className="flex-1">
              <div>
                <span>
                  {headerStr.signin}/{headerStr.signup}
                </span>
                <Icon icon="iconoir:user" width="24" height="24" />
              </div>
              <div>
                
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
