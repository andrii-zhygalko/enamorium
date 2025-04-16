import { RiHeartsFill } from 'react-icons/ri';
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/navbar';
import Link from 'next/link';
import { Button } from '@heroui/button';
import NavLink from './NavLink';
import { auth } from '@/auth';
import UserMenu from './UserMenu';

export default async function TopNav() {
  const session = await auth();

  return (
    <Navbar
      maxWidth={'xl'}
      className='bg-gradient-to-r from-purple-400 to-purple-700'
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]:text-yellow-200',
        ],
      }}
    >
      <NavbarBrand as={Link} href='/'>
        <RiHeartsFill size={40} className='text-gray-200' />
        <div className='font-bold text-3xl flex'>
          <span className='text-gray-200'>En</span>
          <span className='text-pink-100'>amor</span>
          <span className='text-gray-200'>ium</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink href='/members' label='Matches' />
        <NavLink href='/lists' label='Lists' />
        <NavLink href='/messages' label='messages' />
      </NavbarContent>
      <NavbarContent justify='end'>
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <>
            <Button
              as={Link}
              href={'/login'}
              variant={'bordered'}
              className={'text-white'}
            >
              Login
            </Button>
            <Button
              as={Link}
              href={'/register'}
              variant={'bordered'}
              className={'text-white'}
            >
              Register
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
