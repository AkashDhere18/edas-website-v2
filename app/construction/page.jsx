import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: "EDAS Projects",
  description: "Turnkey construction for villas, residential, hospitality and commercial buildings.",
};

export default function ConstructionPage() {
  return (
    <>
      <section className="banner">
        <img src="/assets/img/site-hero-2.webp" alt="" fetchPriority="high" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <span className="label">EDAS Projects</span>
          <h1>Turnkey construction, from drawings to handover.</h1>
          <p>One team responsible for design coordination, approvals, construction and quality.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">What we build</span>
              <h2>Capabilities</h2>
            </div>
          </div>
          <div className="grid-3">
            <div className="card cap">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 21h18M5 21V9l7-5 7 5v12" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </span>
              <h3>General contracting</h3>
              <p>Turnkey construction of residential and commercial buildings.</p>
            </div>
            <div className="card cap">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 11l10-7 10 7" />
                  <path d="M4 10v10h16V10" />
                  <path d="M10 20v-5h4v5" />
                </svg>
              </span>
              <h3>Villas &amp; residences</h3>
              <p>Private homes, including design-ready villas under the <b className="bn">EDAS Promise</b>.</p>
            </div>
            <div className="card cap">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
                  <path d="M2 18h20M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                </svg>
              </span>
              <h3>Interiors &amp; fit-outs</h3>
              <p>High-end fit-outs for homes, hospitality and offices.</p>
            </div>
            <div className="card cap">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="3" width="14" height="18" />
                  <path d="M9 7h6M9 11h6M9 15h6M2 21h20" />
                </svg>
              </span>
              <h3>Retrofitting &amp; façades</h3>
              <p>Structural retrofitting, façade works and safety upgrades.</p>
            </div>
            <div className="card cap">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
                </svg>
              </span>
              <h3>Waterproofing</h3>
              <p>Basements, terraces, podiums and wet areas.</p>
            </div>
            <div className="card cap">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
                </svg>
              </span>
              <h3>Fabrication &amp; infrastructure</h3>
              <p>Steel structures, roads, utilities and HT/LT electrical works.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">How we build</span>
              <h2>Drawn, checked, then built.</h2>
            </div>
          </div>
          <ol className="steps">
            <li>
              <h3>Pre-construction</h3>
              <p>Drawings, structure and MEP coordinated; BOQ and cost plan; approvals.</p>
            </li>
            <li>
              <h3>Foundation</h3>
              <p>Setting out, excavation, PCC and RCC foundations, plinth.</p>
            </li>
            <li>
              <h3>Structure &amp; shell</h3>
              <p>Frame, masonry, plaster and waterproofing, inspected at each stage.</p>
            </li>
            <li>
              <h3>Services &amp; handover</h3>
              <p>Electrical, plumbing and HVAC provisions, testing and documentation.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="wrap two">
          <div className="feature-img"><img src="/assets/img/render-28-tropical.webp" alt="Modern Tropical villa design" loading="lazy" /></div>
          <div className="stack">
            <span className="label">The EDAS Promise</span>
            <h2>Own a plot? We’ll build the villa on it.</h2>
            <p className="lede">Three villa formats, three architectural styles and one accountable team, with milestone-linked payments.</p>
            <div><Link href="/the-edas-promise" className="btn btn-primary">Explore the EDAS Promise</Link></div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Projects</span>
              <h2>Selected projects</h2>
            </div>
          </div>
          <div className="grid-4" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,250px),1fr))" }}>
            <div className="card">
              <div className="media"><img src="/assets/img/site-p-heights.webp" alt="Imperial Heights, Miraj" loading="lazy" style={{ objectPosition: "center 30%" }} /></div>
              <div className="body">
                <span className="tag live">Under construction</span>
                <h3>Imperial Heights, Miraj</h3>
                <div className="meta"><span>G+8 residential</span><span>28,000 sq ft</span></div>
              </div>
            </div>
            <div className="card">
              <div className="media"><img src="/assets/img/site-p-hotel.webp" alt="Hotel Rudhva, Jath" loading="lazy" /></div>
              <div className="body">
                <span className="tag live">Under construction</span>
                <h3>Hotel Rudhva, Jath</h3>
                <div className="meta"><span>G+7 hotel</span><span>52,000 sq ft</span></div>
              </div>
            </div>
            <div className="card">
              <div className="media" style={{ display: "grid", placeItems: "center", color: "var(--brand)" }}>
                <span style={{ width: "64px" }}>
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M8 56h48M18 56V12h28v44" />
                    <path d="M24 20h6M34 20h6M24 28h6M34 28h6M24 36h6M34 36h6M24 44h6M34 44h6M29 56v-6h6v6" />
                  </svg>
                </span>
              </div>
              <div className="body">
                <span className="tag done">Completed</span>
                <h3>Imperial Square, Miraj</h3>
                <div className="meta"><span>G+6 mixed use</span><span>35,000 sq ft</span></div>
              </div>
            </div>
            <Link href="/the-edas-promise" className="card">
              <div className="media"><img src="/assets/img/veda-monteza-layout.webp" alt="Veda Monteza plotted layout, artist’s impression" loading="lazy" /></div>
              <div className="body">
                <span className="tag land">Land stage</span>
                <h3>Veda Monteza, Alibaug</h3>
                <div className="meta"><span>Villa plots</span><span>EDAS Promise</span></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div className="stack">
            <span className="label">Talk to us</span>
            <h2>Plan a project</h2>
            <p className="muted">Share a few details and we will arrange a site visit.</p>
            <div className="card ccard">
              <b>EDAS Projects</b>
              <div className="row"><span className="copyable">coordination@edasprojects.com</span><CopyButton text="coordination@edasprojects.com" /></div>
              <div className="row"><span className="copyable">+91 99751 35552</span></div>
            </div>
          </div>
          <EnquiryForm email="coordination@edasprojects.com">
            <div className="fields">
              <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" type="text" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" autoComplete="tel" required /></div>
              <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" autoComplete="email" /></div>
              <div className="field"><label htmlFor="c-type">Project type</label><select id="c-type"><option>Private villa</option><option>Residential building</option><option>Hotel / hospitality</option><option>Commercial</option><option>Interiors</option><option>Other</option></select></div>
              <div className="field"><label htmlFor="c-loc">Location</label><input id="c-loc" type="text" /></div>
              <div className="field"><label htmlFor="c-area">Approx. area (sq ft)</label><input id="c-area" type="text" /></div>
            </div>
            <div className="field"><label htmlFor="coo-msg">Message</label><textarea id="coo-msg"></textarea></div>
            <div><button className="btn btn-primary" type="submit">Request a site visit</button></div>
          </EnquiryForm>
        </div>
      </section>
    </>
  );
}
