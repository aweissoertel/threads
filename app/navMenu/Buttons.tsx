'use client';

import {ReactElement} from 'react';

import {signOut, useSession} from 'next-auth/react';

export function SignOut(): ReactElement {
  const {data: session, status} = useSession();

  if (status === 'loading') {
    return <p className='ml-auto dark:text-white text-base'>Loading...</p>;
  } else if (status === 'authenticated') {
    const name = session.user?.name;
    return (
      <div className='flex flex-row gap-2 ml-auto items-center'>
        <p className='dark:text-white text-base'>Hi, {name}! 👋</p>
        <SignOutButton />
      </div>
    );
  }

  return <p className='ml-auto dark:text-white text-base'>ಠ_ಠ</p>;
}

function SignOutButton(): ReactElement {
  return (
    <button
      className='bg-blue-500 hover:bg-red-800 text-white font-bold text-sm py-1 px-2 rounded'
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
