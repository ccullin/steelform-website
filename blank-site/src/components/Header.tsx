'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Phone,
  Mail,
  Menu
} from 'lucide-react';

interface HeaderProps {
  globalSettings: any;
}

export default function Header({
  globalSettings,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Projects', href: '/projects' },
    { label: 'Articles', href: '/articles' },
    { label: 'Why Steelform', href: '/why-steelform' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const linkedin = globalSettings?.socialLinks?.find(
  (link: any) => link.platform === 'linkedin'
  );
  const youtube = globalSettings?.socialLinks?.find(
  (link: any) => link.platform === 'youtube'
  );
  const facebook = globalSettings?.socialLinks?.find(
  (link: any) => link.platform === 'facebook'
  );
  const instagram = globalSettings?.socialLinks?.find(
  (link: any) => link.platform === 'instagram'
  );
  

  return (
    <header className="w-full">
      {/* Top Brand Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden lg:grid items-center py-6"
            style={{ gridTemplateColumns: 'auto 1fr auto', }}>

            {/* Column 1 - Logo */}
           <div className="flex justify-start items-center">
            <Link href="/" className="block">
              <Image
                src="/branding/steelform-logo-light-v1.svg"
                alt="Steelform Engineering"
                width={420}
                height={120}  
                priority
                // className="w-auto"
              />
            </Link>
          </div>

            {/* Column 2 - CTA */}
            <div className="flex justify-center">
              <Link
                href="/contact-us"
                className="
                  bg-[#F27224]
                  text-white
                  px-8
                  py-4
                  rounded-lg
                  font-semibold
                  hover:bg-orange-600
                  transition-colors
                  shadow-sm
                "
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Column 3 - Contact + Socials */}
            <div className="flex flex-col items-end">

              <div className="flex items-baseline gap-2">
                <span className="text-[#C9952A] font-semibold uppercase tracking-wide">
                  Call:
                </span>

                <span className="text-2xl font-bold text-slate-800 whitespace-nowrap">
                  {globalSettings?.phoneNumber}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-3">

                <a
                  href={linkedin?.url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>

                <a
                  href={facebook?.url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                </a>

                <a
                  href={instagram?.url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </a>

              </div>

            </div>

          </div>

          {/* Mobile Header */}
          <div className="flex lg:hidden items-center justify-between py-4">

            <Link href="/">
              <Image
                src="/branding/steelform-logo-light.svg"
                alt="Steelform Engineering"
                width={240}
                height={70}
                priority
              />
            </Link>

            <button
              className="text-[#22333D]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open navigation"
            >
              <Menu size={32} />
            </button>

          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#22333D]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <nav className="hidden lg:flex items-center justify-center gap-12 h-16">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white uppercase tracking-wide font-medium hover:text-[#F27224] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white py-3 border-b border-slate-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contact-us"
                  className="mt-4 bg-[#F27224] text-white text-center py-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
