import CompareSlider from '@/components/CompareSlider';
import StyleTabs from '@/components/StyleTabs';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: "The EDAS Promise",
  description: "Your plot, your villa, one complete journey: design, approvals and construction by EDAS.",
};

export default function PromisePage() {
  return (
    <>
      <section className="banner">
        <img src="/assets/img/villa-mediterranean.webp" alt="" fetchPriority="high" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <span className="label">The EDAS Promise</span>
          <h1>Your plot. Your villa. One complete journey.</h1>
          <p>Design, approvals, engineering and construction by one accountable team. Launching at Veda Monteza, Alibaug.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-3">
          <div className="stack" style={{ gap: "8px" }}>
            <span className="label plain">One partner</span>
            <h3>Every step, one team</h3>
            <p className="muted">Design, approvals, engineering, procurement and construction under one contract.</p>
          </div>
          <div className="stack" style={{ gap: "8px" }}>
            <span className="label plain">Your choice</span>
            <h3>Your plot, your style</h3>
            <p className="muted">Pick a villa format and architectural style. We engineer it for your plot.</p>
          </div>
          <div className="stack" style={{ gap: "8px" }}>
            <span className="label plain">Clarity</span>
            <h3>No hidden costs</h3>
            <p className="muted">Costs follow approved drawings and the BOQ, paid as work progresses.</p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">From drawing to home</span>
              <h2>Every villa starts as a precise drawing.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "40ch" }}>Drag the handle to compare the CAD drawing with the finished design.</p>
          </div>
          <CompareSlider />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Choose your style</span>
              <h2>Three architectural styles.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "40ch" }}>Pick a style to see the villa, its materials and its floor plans.</p>
          </div>
          <StyleTabs />
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Design library</span>
              <h2>Every plot, its own design.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "42ch" }}>Designs and material palettes prepared for individual plots at Veda Monteza.</p>
          </div>
          <div className="library">
            <figure>
              <img src="/assets/img/board-24-mediterranean.webp" alt="Mediterranean villa design" loading="lazy" />
              <figcaption>Mediterranean</figcaption>
            </figure>
            <figure>
              <img src="/assets/img/board-28-tropical.webp" alt="Tropical villa design" loading="lazy" />
              <figcaption>Tropical</figcaption>
            </figure>
            <figure>
              <img src="/assets/img/board-40-contemporary.webp" alt="Contemporary villa design" loading="lazy" />
              <figcaption>Contemporary</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Villa formats</span>
              <h2>Sized for your plot.</h2>
            </div>
          </div>
          <div className="grid-3">
            <div className="card format">
              <span className="code">EDAS 01</span>
              <h3>Weekend</h3>
              <p className="muted">Compact and easy to maintain.</p>
              <dl>
                <dt>Built-up</dt>
                <dd>1,200–1,500 sq ft</dd>
                <dt>Plot</dt>
                <dd>about 1,500 sq ft</dd>
                <dt>Bedrooms</dt>
                <dd>2</dd>
              </dl>
            </div>
            <div className="card format">
              <span className="code">EDAS 02</span>
              <h3>Family</h3>
              <p className="muted">Connected living for the whole family.</p>
              <dl>
                <dt>Built-up</dt>
                <dd>1,800–2,200 sq ft</dd>
                <dt>Plot</dt>
                <dd>2,000–2,200 sq ft</dd>
                <dt>Bedrooms</dt>
                <dd>3</dd>
              </dl>
            </div>
            <div className="card format">
              <span className="code">EDAS 03</span>
              <h3>Signature</h3>
              <p className="muted">Generous volumes and outdoor living.</p>
              <dl>
                <dt>Built-up</dt>
                <dd>2,500–3,000 sq ft</dd>
                <dt>Plot</dt>
                <dd>3,000–4,000 sq ft</dd>
                <dt>Bedrooms</dt>
                <dd>4</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">The journey</span>
              <h2>From land to lived-in.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "40ch" }}>Eight stops from your plot to your villa, with one team at every step.</p>
            <div style={{ display: "none" }}></div>
          </div>
          <div className="route">
            <div className="route-phases"><span style={{ gridColumn: "1/5" }}>Design</span><span style={{ gridColumn: "5/9" }}>Build</span></div>
            <div className="route-track">
              <svg viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M50 30 C100 30 100 70 150 70 S200 30 250 30 S300 70 350 70 S400 30 450 30 S500 70 550 70 S600 30 650 30 S700 70 750 70" />
              </svg>
              <ol>
                <li><span className="pin"><i>1</i></span><b>Site visit</b><span>We walk the plot and check what it allows</span></li>
                <li><span className="pin"><i>2</i></span><b>Choose a format</b><span>Weekend, Family or Signature</span></li>
                <li><span className="pin"><i>3</i></span><b>Choose a style</b><span>Tropical, Mediterranean or Contemporary</span></li>
                <li><span className="pin"><i>4</i></span><b>Final design</b><span>Architecture, structure, MEP and BOQ</span></li>
                <li><span className="pin"><i>5</i></span><b>Approvals</b><span>Applications and liaison handled</span></li>
                <li><span className="pin"><i>6</i></span><b>Construction</b><span>Foundation to external plaster</span></li>
                <li><span className="pin"><i>7</i></span><b>Warm shell</b><span>Weather-protected, ready for finishes</span></li>
                <li><span className="pin"><i>8</i></span><b>Your home</b><span>Optional interiors, landscape and pool</span></li>
              </ol>
            </div>
            <div className="ends"><span>Your plot</span><span>Your villa</span></div>
          </div>
          <p className="callout" style={{ marginTop: "28px" }}><b>Simple, milestone-linked payments.</b> You pay in stages as work progresses on site. The detailed schedule comes with your proposal.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap two">
          <div className="feature-img"><img src="/assets/img/veda-monteza-layout.webp" alt="Veda Monteza plotted layout, artist’s impression" loading="lazy" /></div>
          <div className="stack">
            <span className="label">First programme</span>
            <h2>Veda Monteza, Mapgaon, Alibaug</h2>
            <span className="tag land">Land stage</span>
            <p className="muted">Concept designs are ready for every plot, so buyers can see their future home before they build it with <b className="bn">EDAS</b>. The <b className="bn">EDAS Promise</b> will extend to more developments and individual plot owners.</p>
            <p className="note">Layout: artist’s impression, courtesy Veda Life Spaces.</p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div className="stack">
            <span className="label">Get started</span>
            <h2>Request a vision book for your plot</h2>
            <p className="muted">A short illustrated book with your plot in context, indicative plans and three design options.</p>
          </div>
          <EnquiryForm email="coordination@edasprojects.com">
            <div className="fields">
              <div className="field"><label htmlFor="v-name">Name</label><input id="v-name" type="text" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="v-phone">Phone</label><input id="v-phone" type="tel" autoComplete="tel" required /></div>
              <div className="field"><label htmlFor="v-loc">Plot location</label><input id="v-loc" type="text" /></div>
              <div className="field"><label htmlFor="v-size">Plot size (sq ft)</label><input id="v-size" type="text" /></div>
              <div className="field"><label htmlFor="v-style">Preferred style</label><select id="v-style"><option>Not sure yet</option><option>Modern Tropical</option><option>Coastal Mediterranean</option><option>Luxury Contemporary</option></select></div>
              <div className="field"><label htmlFor="v-when">When to start</label><select id="v-when"><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>Just exploring</option></select></div>
            </div>
            <div className="field"><label htmlFor="coo-msg">Message</label><textarea id="coo-msg"></textarea></div>
            <div><button className="btn btn-primary" type="submit">Request vision book</button></div>
          </EnquiryForm>
        </div>
        <div className="wrap">
          <p className="note" style={{ marginTop: "28px" }}>Concept images and indicative plans are for design discussion only. Plot dimensions, setbacks, costs, specifications and statutory compliance must be verified by appointed professionals and relevant authorities.</p>
        </div>
      </section>
    </>
  );
}
