'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from './Icons';

const PAGE_BY_PATH = {
  '/': 'home',
  '/about': 'about',
  '/advisory': 'advisory',
  '/construction': 'construction',
  '/the-edas-promise': 'promise',
  '/careers': 'careers',
  '/contact': 'contact',
};

const DESKTOP_HOVER = '(hover: hover) and (min-width: 861px)';

export default function Header() {
  const pathname = usePathname();
  const page = PAGE_BY_PATH[pathname] || '';
  const cur = (p) => (page === p ? { 'aria-current': 'page' } : {});

  // Construction dropdown
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const ddRef = useRef(null);
  const btnRef = useRef(null);

  // close the menu whenever the page changes
  if (openedOn !== pathname) {
    setOpenedOn(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onDocClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const hoverable = () => window.matchMedia(DESKTOP_HOVER).matches;

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="wrap">
          <p>Real estate advisory &amp; turnkey construction · Mumbai, Alibaug &amp; Western Maharashtra</p>
          <p className="tb-contact">
            <span className="copyable">coordination@edasprojects.com</span>
            <span className="copyable">+91 99751 35552</span>
          </p>
        </div>
      </div>
      <header className="site-header" id="top">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="EDAS home">
            <img src="/assets/img/logo.png" alt="EDAS, Innovate | Build | Inspire" width="520" height="124" />
          </Link>
          <nav className="nav" aria-label="Main">
            <Link href="/" {...cur('home')}>Home</Link>
            <Link href="/about" {...cur('about')}>About Us</Link>
            <Link href="/advisory" {...cur('advisory')}>Advisory</Link>
            <div
              ref={ddRef}
              className={'dd' + (page === 'construction' || page === 'promise' ? ' is-cur' : '') + (open ? ' open' : '')}
              onMouseEnter={() => { if (hoverable()) setOpen(true); }}
              onMouseLeave={() => { if (hoverable()) setOpen(false); }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setOpen(false);
                  btnRef.current?.focus();
                }
              }}
            >
              <button
                ref={btnRef}
                type="button"
                className="dd-btn"
                aria-expanded={open ? 'true' : 'false'}
                aria-controls="dd-construction"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((o) => !o);
                }}
              >
                Construction <ChevronDownIcon />
              </button>
              <div className="dd-menu" id="dd-construction">
                <Link href="/construction" {...cur('construction')}>
                  <b>Turnkey Construction</b>
                  <span>Homes, hotels and commercial buildings</span>
                </Link>
                <Link href="/the-edas-promise" {...cur('promise')}>
                  <b>The EDAS Promise</b>
                  <span>Design-ready villas on your plot</span>
                </Link>
              </div>
            </div>
            <Link href="/careers" {...cur('careers')}>Careers</Link>
            <Link className="nav-cta" href="/contact" {...cur('contact')}>Contact Us</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
