'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const COUNT = 3;
const INTERVAL = 6500;

export default function HeroCarousel() {
  // i = visible slide; seen = bitmask of slides already shown (their images switch from lazy to eager)
  const [state, setState] = useState({ i: 0, seen: 1 });
  const timer = useRef(null);
  const reduce = useRef(false);

  const go = useCallback((next) => {
    setState((s) => {
      const i = ((typeof next === 'function' ? next(s.i) : next) + COUNT) % COUNT;
      return { i, seen: s.seen | (1 << i) };
    });
  }, []);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const start = useCallback(() => {
    if (reduce.current) return;
    stop();
    timer.current = setInterval(() => go((i) => i + 1), INTERVAL);
  }, [go, stop]);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    start();
    return stop;
  }, [start, stop]);

  const { i, seen } = state;
  const slide = (k) => ({
    className: 'slide' + (k === i ? ' on' : ''),
    role: 'group',
    'aria-roledescription': 'slide',
    'aria-label': `${k + 1} of ${COUNT}`,
    'aria-hidden': k === i ? 'false' : 'true',
  });
  const lazy = (k) => (seen & (1 << k) ? 'eager' : 'lazy');

  return (
    <section
      className="carousel"
      data-carousel=""
      aria-roledescription="carousel"
      aria-label="EDAS at a glance"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={start}
    >
      <div {...slide(0)}>
        <img src="/assets/img/real-estate-advice-carrired-through-delivery.jpeg" alt="" fetchPriority="high" />
        <div className="wrap">
          <span className="label">EDAS Group</span>
          <h1>Real estate advice, carried through to delivery.</h1>
          <p>We help developers, landowners and lenders make sound real estate decisions, and we build what gets decided.</p>
          <div className="hero-actions">
            <Link className="btn btn-white" href="/about">About EDAS</Link>
            <Link className="btn btn-line-white" href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div {...slide(1)}>
        <img src="/assets/img/asset-advisory.jpeg" alt="" loading={lazy(1)} />
        <div className="wrap">
          <span className="label">EDAS Asset Advisors</span>
          <p className="h1">Clarity at every stage of a real estate asset.</p>
          <p>Land diligence, development management, capital advisory and independent support for lenders.</p>
          <div className="hero-actions">
            <Link className="btn btn-white" href="/advisory">Explore Advisory</Link>
          </div>
        </div>
      </div>
      <div {...slide(2)}>
        <img src="/assets/img/land-to-landmark.jpeg" alt="" loading={lazy(2)} />
        <div className="wrap">
          <span className="label">EDAS Projects</span>
          <p className="h1">From land to landmark.</p>
          <p>
            Turnkey construction for homes, hotels and commercial buildings, and design-ready villas under the{' '}
            <b className="bn">EDAS Promise</b>.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-white" href="/construction">Explore Construction</Link>
            <Link className="btn btn-line-white" href="/the-edas-promise">The EDAS Promise</Link>
          </div>
        </div>
      </div>
      <button className="car-btn prev" type="button" aria-label="Previous slide" onClick={() => { go(i - 1); start(); }}>
        <ChevronLeftIcon />
      </button>
      <button className="car-btn next" type="button" aria-label="Next slide" onClick={() => { go(i + 1); start(); }}>
        <ChevronRightIcon />
      </button>
      <div className="car-dots">
        {Array.from({ length: COUNT }, (_, k) => (
          <button
            key={k}
            type="button"
            aria-label={`Slide ${k + 1}`}
            aria-current={k === i ? 'true' : undefined}
            onClick={() => { go(k); start(); }}
          />
        ))}
      </div>
    </section>
  );
}
