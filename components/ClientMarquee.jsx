const CLIENTS = [
  ['/assets/img/client-sunteck.svg', 'Sunteck Realty'],
  ['/assets/img/client-veda.png', 'Veda Life Spaces'],
  ['/assets/img/client-oberoi.svg', 'Oberoi Realty'],
  ['/assets/img/client-hoabl.png', 'The House of Abhinandan Lodha'],
  ['/assets/img/client-edelweiss-arc.png', 'Edelweiss Asset Reconstruction'],
  ['/assets/img/client-neo.png', 'Neo Wealth'],
];

// Scrolling client logo strip. The list is rendered twice so the CSS animation loops seamlessly.
export default function ClientMarquee() {
  return (
    <div className="marquee" style={{ marginTop: '16px' }} aria-label="Clients">
      <div className="marquee-track">
        <ul className="marquee-list">
          {CLIENTS.map(([src, name]) => (
            <li className="logo-tile" key={src}>
              <img src={src} alt={name} loading="lazy" />
            </li>
          ))}
        </ul>
        <ul className="marquee-list" aria-hidden="true">
          {CLIENTS.map(([src]) => (
            <li className="logo-tile" key={src}>
              <img src={src} alt="" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
