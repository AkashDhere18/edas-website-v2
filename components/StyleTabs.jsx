'use client';

import { useRef, useState } from 'react';

const STYLES = [
  {
    key: 'tr',
    name: 'Modern Tropical',
    tagline: 'Open, shaded, naturally connected.',
    thumb: '/assets/img/render-28-tropical.webp',
    render: '/assets/img/render-28-tropical.webp',
    description: 'Deep overhangs, timber louvers and shaded verandahs that make the garden part of the house.',
    swatches: [
      ['#9B6A3C', 'Teak wood'],
      ['#3A3D42', 'Gabled roof'],
      ['#B8B2A7', 'Concrete finish'],
      ['#A08E76', 'Stone cladding'],
      ['#8FA3A2', 'Glass balustrade'],
      ['#3B302B', 'Dark louvers'],
    ],
    plans: ['/assets/img/plot28-gf-plan.webp', '/assets/img/plot28-ff-plan.webp'],
  },
  {
    key: 'me',
    name: 'Coastal Mediterranean',
    tagline: 'Warm, crafted, timeless.',
    thumb: '/assets/img/render-24-mediterranean.webp',
    render: '/assets/img/render-24-mediterranean.webp',
    description: 'Arched openings, terracotta roof tiles, cream stucco and wrought iron for a relaxed holiday feeling.',
    swatches: [
      ['#C8673F', 'Terracotta tiles'],
      ['#EFE6D3', 'Cream stucco'],
      ['#6B3E24', 'Dark wood frames'],
      ['#2E2A28', 'Wrought iron'],
      ['#B89C78', 'Natural stone'],
      ['#9A9A96', 'Stone pavers'],
    ],
    plans: ['/assets/img/plot24-gf-plan.webp', '/assets/img/plot24-ff-plan.webp'],
  },
  {
    key: 'co',
    name: 'Luxury Contemporary',
    tagline: 'Clean, calm, refined.',
    thumb: '/assets/img/villa-contemporary.webp',
    render: '/assets/img/villa-contemporary.webp',
    description: 'Strong horizontal lines, warm timber and large glazing that opens the house to the garden.',
    swatches: [
      ['#ECE8E1', 'Off-white stucco'],
      ['#9A6436', 'Teak cladding'],
      ['#3A3B3E', 'Dark metal'],
      ['#D3CDC2', 'Large-format stone'],
      ['#B7CBD0', 'Clear glass'],
    ],
    plans: ['/assets/img/plan-11-gf.webp', '/assets/img/plan-11-ff.webp'],
  },
];

// "Choose your style" tabs (The EDAS Promise page)
export default function StyleTabs() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef([]);

  const onKeyDown = (e, i) => {
    const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + STYLES.length) % STYLES.length;
    setSelected(n);
    tabRefs.current[n]?.focus();
  };

  return (
    <div data-tabs="">
      <div className="picker" role="tablist" aria-label="Architectural style">
        {STYLES.map((s, i) => (
          <button
            key={s.key}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`o-${s.key}`}
            aria-controls={`op-${s.key}`}
            aria-selected={i === selected ? 'true' : 'false'}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <img src={s.thumb} alt="" />
            <span>
              <b>{s.name}</b>
              <span>{s.tagline}</span>
            </span>
          </button>
        ))}
      </div>
      {STYLES.map((s, i) => (
        <div key={s.key} className="option" role="tabpanel" id={`op-${s.key}`} aria-labelledby={`o-${s.key}`} hidden={i !== selected}>
          <div className="render">
            <img src={s.render} alt={`${s.name} villa design`} loading="lazy" />
          </div>
          <div className="stack" style={{ gap: '10px' }}>
            <p className="tagline" style={{ font: '700 1.2rem/1.3 var(--f-head)' }}>{s.tagline}</p>
            <p className="muted">{s.description}</p>
            <span className="note">Material palette</span>
            <ul className="swatches">
              {s.swatches.map(([color, label]) => (
                <li key={label}>
                  <i style={{ background: color }}></i>
                  {label}
                </li>
              ))}
            </ul>
            <span className="note" style={{ marginTop: '6px' }}>Floor plans</span>
            <div className="mini-plans">
              <figure>
                <img src={s.plans[0]} alt={`${s.name} design, ground floor plan`} loading="lazy" />
                <figcaption>Ground floor</figcaption>
              </figure>
              <figure>
                <img src={s.plans[1]} alt={`${s.name} design, first floor plan`} loading="lazy" />
                <figcaption>First floor</figcaption>
              </figure>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
