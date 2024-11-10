import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="wrapper">
      <div className="flex justify-between items-center bg-black text-white px-4 py-3">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 font-semibold">
            <li className="hover:text-slate-400 transition-colors duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-slate-400 transition-colors duration-200">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-slate-400 transition-colors duration-200">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="hover:text-slate-400 transition-colors duration-200">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2">
            <Menu size={24} className="text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white p-4">
            <nav>
              <ul className="flex flex-col items-start gap-4 font-semibold">
                <li className="hover:text-slate-400 transition-colors duration-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-slate-400 transition-colors duration-200">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-slate-400 transition-colors duration-200">
                  <Link href="/skills">Skills</Link>
                </li>
                <li className="hover:text-slate-400 transition-colors duration-200">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
