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
    <form onSubmit={onSubmit} className="relative">
      <input
        key={searchParams?.get('search')}
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        defaultValue={searchParams?.get('search') || ''}
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <Icon
          icon="mynaui:search"
          width="24"
          height="24"
          className={'h-4 text-primary-primary'}
        />
      </button>
    </form>
  );
}
