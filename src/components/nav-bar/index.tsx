'use client';

import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <section className='nav-bar'>
      <Link
        href="/"
      >
        <Image
          src="/logo.svg"
          width="82"
          height="82"
          alt="logo casamento"
        />
      </Link>
      <div className='menu-mobile'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div>
              <ul className='menu-list'>
                <Link href={'/'}>
                  <li className={pathname == "/" ? "selected menu-item" : "menu-item"}>Home</li>
                </Link>
                <Link href={'/convite'}>
                  <li className={pathname == "/convite" ? "selected menu-item" : "menu-item"}>Convite</li>
                </Link>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="menu-desktop">
        <ul className='menu-list'>
          <Link href={'/'}>
            <li className={pathname == "/" ? "selected menu-item" : "menu-item"}>Home</li>
          </Link>
          <Link href={'/convite'}>
            <li className={pathname == "/convite" ? "selected menu-item" : "menu-item"}>Convite</li>
          </Link>
        </ul>
      </div>
    </section>
  )
}