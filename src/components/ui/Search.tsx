'use client';
import { Icon } from '@iconify/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function onSubmit(e) {
    e.preventDefault();

    const val = e.target;
    const search = val.search;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', '1');
    if (search.value) {
      newParams.set('search', search.value);
    } else {
      newParams.delete('search');
    }

    // console.log(search.value);
    // router.push(createUrl("/search", newParams));
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });

    // router.push(pathname + "?" + newParams.toString());
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-row-reverse items-center  w-xl h-10 p-2 rounded-xl bg-gray-50 border border-gray-300"
    >
      <input
        key={searchParams?.get('search')}
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        defaultValue={searchParams?.get('search') || ''}
        className=" w-full  text-sm"
      />
      <button
        type="submit"
        className="w-8 right-0 top-0 mr-2 flex h-full items-center"
      >
        <Icon
          icon="mynaui:search"
          width="22"
          height="22"
          className={'text-primary-950'}
        />
      </button>
    </form>
  );
}
