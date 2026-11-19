import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import HeroCarousel from '@/components/HeroCarousel';
import ClientMarquee from '@/components/ClientMarquee';

export const metadata = {
  title: "EDAS Group",
  description: "EDAS Group: real estate advisory (EDAS Asset Advisors) and turnkey construction (EDAS Projects) under one accountable partner.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroCarousel />
      {/* INTRO + CHOICES */}
      <section className="section">
        <div className="wrap two" style={{ alignItems: "center" }}>
          <div className="stack">
            <span className="label">Who we are</span>
            <h2>One partner who understands both the site and the numbers.</h2>
            <p className="lede"><b className="bn">EDAS</b> brings construction management and real estate credit experience to the same table. Developers, landowners and lenders get one independent view of progress, cost and risk, and one team accountable for delivery.</p>
          </div>
          <div className="choices" style={{ marginTop: "0", maxWidth: "none" }}>
            <Link href="/advisory" className="choice">
              <b>
                Asset Advisory
                <ArrowIcon />
              </b>
              <span>Development management, due diligence, capital advisory and lender support</span>
            </Link>
            <Link href="/construction" className="choice">
              <b>
                Construction
                <ArrowIcon />
              </b>
              <span>Turnkey building and design-ready villas under the EDAS Promise</span>
            </Link>
          </div>
        </div>
      </section>
      {/* BUSINESSES */}
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Our businesses</span>
              <h2>Two businesses. One standard.</h2>
            </div>
          </div>
          <div className="biz">
            <Link href="/advisory" className="card">
              <div className="media"><img src="/assets/img/hero-terrace.webp" alt="Drawings and plans on a terrace overlooking the Mumbai skyline" loading="lazy" /></div>
              <div className="body">
                <span className="entity">EDAS Asset Advisors</span>
                <h3>Real estate advisory</h3>
                <p>Land diligence, development management, capital advisory and lender support.</p>
                <ul className="chips">
                  <li>Development management</li>
                  <li>Due diligence</li>
                  <li>Capital advisory</li>
                  <li>Lender’s engineer</li>
                </ul>
                <span className="more">
                  Explore advisory
                  <ArrowIcon />
                </span>
              </div>
            </Link>
            <Link href="/construction" className="card">
              <div className="media"><img src="/assets/img/site-p-site.webp" alt="Concrete frame of a building under construction" loading="lazy" /></div>
              <div className="body">
                <span className="entity">EDAS Projects</span>
                <h3>Turnkey construction</h3>
                <p>Design-to-handover contracting for homes, hotels and commercial buildings.</p>
                <ul className="chips">
                  <li>Villas</li>
                  <li>Residential</li>
                  <li>Hospitality</li>
                  <li>Interiors</li>
                </ul>
                <span className="more">
                  Explore construction
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* PROMISE */}
      <section className="section">
        <div className="wrap two">
          <div className="feature-img"><img src="/assets/img/render-24-mediterranean.webp" alt="Coastal Mediterranean villa design for Veda Monteza" loading="lazy" style={{ objectPosition: "center 40%" }} /></div>
          <div className="stack">
            <span className="label">The EDAS Promise</span>
            <h2>Your plot. Your villa. One complete journey.</h2>
            <p className="lede">Choose a villa format and an architectural style. <b className="bn">EDAS</b> handles design, approvals, engineering and construction.</p>
            <ul className="ticks">
              <li><span><b>One partner</b> from first sketch to handover</span></li>
              <li><span><b>Three styles:</b> Tropical, Mediterranean, Contemporary</span></li>
              <li><span><b>Payments</b> linked to visible progress on site</span></li>
            </ul>
            <p className="note">Launching at Veda Monteza, Alibaug. More developments to follow.</p>
            <div><Link href="/the-edas-promise" className="btn btn-primary">Explore the EDAS Promise</Link></div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Projects</span>
              <h2>Selected projects</h2>
            </div>
            <Link href="/construction" className="more">
              More on construction
              <ArrowIcon />
            </Link>
          </div>
          <div className="grid-3">
            <Link href="/construction" className="card">
              <div className="media"><img src="/assets/img/site-p-heights.webp" alt="Imperial Heights, Miraj" loading="lazy" style={{ objectPosition: "center 30%" }} /></div>
              <div className="body">
                <span className="tag live">Under construction</span>
                <h3>Imperial Heights, Miraj</h3>
                <div className="meta"><span>G+8 residential</span><span>28,000 sq ft</span></div>
              </div>
            </Link>
            <Link href="/construction" className="card">
              <div className="media"><img src="/assets/img/site-p-hotel.webp" alt="Hotel Rudhva, Jath" loading="lazy" /></div>
              <div className="body">
                <span className="tag live">Under construction</span>
                <h3>Hotel Rudhva, Jath</h3>
                <div className="meta"><span>G+7 hotel</span><span>52,000 sq ft</span></div>
              </div>
            </Link>
            <Link href="/the-edas-promise" className="card">
              <div className="media"><img src="/assets/img/veda-monteza-layout.webp" alt="Veda Monteza plotted layout, artist’s impression" loading="lazy" /></div>
              <div className="body">
                <span className="tag land">Land stage</span>
                <h3>Veda Monteza, Alibaug</h3>
                <div className="meta"><span>Design-ready villa plots</span><span>EDAS Promise</span></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* CLIENTS */}
      <section className="section tight">
        <div className="wrap">
          <p className="label plain" style={{ justifyContent: "center", width: "100%", color: "var(--ink-2)" }}>Trusted by developers and lenders</p>
          <ClientMarquee />
        </div>
      </section>
      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div className="stack" style={{ gap: "6px" }}>
            <h2>Have a project or a decision ahead?</h2>
            <p>Tell us where you are. The right team will reply within one working day.</p>
          </div>
          <Link href="/contact" className="btn btn-white">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
