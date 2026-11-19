'use client';

import { useState } from 'react';

// Blueprint ↔ Built slider (The EDAS Promise page)
export default function CompareSlider() {
  const [pos, setPos] = useState(50);

  return (
    <div className="compare" style={{ '--pos': `${pos}%` }}>
      <img src="/assets/img/villa-cad.svg" alt="CAD line drawing of a contemporary villa" loading="lazy" />
      <img className="built" src="/assets/img/villa-contemporary.webp" alt="Rendered contemporary villa at dusk" loading="lazy" />
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        id="compare-range"
        aria-label="Compare CAD drawing and finished design"
      />
      <span className="handle" aria-hidden="true"></span>
      <span className="lbl l" aria-hidden="true">CAD drawing</span>
      <span className="lbl r" aria-hidden="true">Elevation</span>
    </div>
  );
}
