import CopyButton from '@/components/CopyButton';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: "EDAS Asset Advisors",
  description: "Land diligence, development management, capital advisory and lender support for Indian real estate.",
};

export default function AdvisoryPage() {
  return (
    <>
      <section className="banner">
        <img src="/assets/img/banner-plan.webp" alt="" fetchPriority="high" style={{ objectPosition: "right center" }} />
        <div className="wrap">
          <span className="label">EDAS Asset Advisors</span>
          <h1>Clarity at every stage of a real estate asset.</h1>
          <p>Independent technical and financial advice for landowners, developers, lenders and investors.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">What we do</span>
              <h2>Four practices. One integrated team.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "44ch" }}>Engage one practice for a specific need, or combine them into a single mandate.</p>
          </div>
          <div className="grid-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))" }}>
            <div className="card practice core">
              <span className="line">From land to development</span>
              <h3>Land, diligence &amp; feasibility</h3>
              <ul>
                <li>Land evaluation and technical due diligence</li>
                <li>Title, land-use and regulatory review</li>
                <li>Feasibility and techno-economic viability (TEV)</li>
                <li>Land acquisition, monetisation and JDA structuring</li>
              </ul>
            </div>
            <div className="card practice core">
              <span className="line">From plan to possession</span>
              <h3>Development management &amp; owner’s representation</h3>
              <ul>
                <li>Owner’s representative on site</li>
                <li>Design, approvals and liaison</li>
                <li>Contractor and vendor management</li>
                <li>Cost, quality and programme control</li>
              </ul>
            </div>
            <div className="card practice core">
              <span className="line">From capital to closure</span>
              <h3>Capital &amp; financial advisory</h3>
              <ul>
                <li>Financial modelling and cash-flow planning</li>
                <li>Bank debt and capital raising</li>
                <li>Escrow and cash-flow governance</li>
                <li>RERA, lender and investor reporting</li>
              </ul>
            </div>
            <div className="card practice core">
              <span className="line">From stress to strength</span>
              <h3>Lender &amp; special situations</h3>
              <ul>
                <li>Lender’s Independent Engineer (LIE)</li>
                <li>Construction and escrow monitoring</li>
                <li>Cost-to-complete reviews</li>
                <li>Resolution advice for stalled projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">How we work</span>
              <h2>Four steps, agreed up front.</h2>
            </div>
          </div>
          <ol className="steps">
            <li>
              <h3>Diagnostic review</h3>
              <p>Site audit, technical feasibility and validation of the financial model.</p>
            </li>
            <li>
              <h3>Mandate structuring</h3>
              <p>Clear scope, KPIs and milestones, in writing.</p>
            </li>
            <li>
              <h3>Execution</h3>
              <p>Dedicated site monitors and financial systems in place.</p>
            </li>
            <li>
              <h3>Ongoing governance</h3>
              <p>Monthly dashboards, escrow audits and lender updates.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="wrap two">
          <figure style={{ margin: "0" }} className="stack">
            <div className="report-stack" aria-hidden="true"><img src="/assets/img/tdd-cover.webp" alt="" /><img src="/assets/img/tdd-risk.webp" alt="" /><img src="/assets/img/tdd-survey.webp" alt="" /><span className="stamp">Client details masked</span></div>
            <figcaption className="note" style={{ textAlign: "center" }}>From an EDAS due diligence report: cover, risk register and plot survey.</figcaption>
          </figure>
          <div className="stack">
            <span className="label">Selected assignments</span>
            <h2>Recent work</h2>
            <p className="muted">A few examples from our current work. Client names are withheld.</p>
            <div className="cases">
              <div className="case">
                <span className="k">Development management</span>
                <h3>Plotted project, Alibaug</h3>
                <p>Owner’s representation from layout and approvals through site execution.</p>
              </div>
              <div className="case">
                <span className="k">Due diligence</span>
                <h3>15-acre land parcel, Alibaug</h3>
                <p>Technical due diligence on land valued at about ₹175 Cr: title, land use, access and regulatory review before acquisition.</p>
              </div>
              <div className="case">
                <span className="k">Land acquisition</span>
                <h3>JDA project, Alibaug</h3>
                <p>Land acquisition support and joint development agreement structuring.</p>
              </div>
              <div className="case">
                <span className="k">Construction monitoring</span>
                <h3>Stressed project, Pune</h3>
                <p>Independent monitoring of construction progress and cost for an asset reconstruction company.</p>
              </div>
            </div>
            <details className="more-cases">
              <summary>More assignments</summary>
              <div className="cases">
                <div className="case">
                  <span className="k">Feasibility</span>
                  <h3>8-acre plotted land, Alibaug</h3>
                  <p>TEV report and phase-wise cash-flow model.</p>
                </div>
                <div className="case">
                  <span className="k">Land monetisation</span>
                  <h3>Large coastal land bank, Raigad</h3>
                  <p>Phase 1: land-record rectification and a master layout, with <b className="bn">EDAS</b> as single-point advisor.</p>
                </div>
                <div className="case">
                  <span className="k">Cost-to-complete</span>
                  <h3>Landmark mixed-use tower, Mumbai</h3>
                  <p>Balance-cost review and value-engineering options.</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div className="stack">
            <span className="label">Talk to us</span>
            <h2>Discuss a mandate</h2>
            <p className="muted">Tell us about the asset and the decision ahead. A founder will reply.</p>
            <div className="card ccard">
              <b>Prayag Agarwal</b>
              <div className="row"><span className="copyable">prayag.agarwal@edasprojects.com</span><CopyButton text="prayag.agarwal@edasprojects.com" /></div>
              <div className="row"><span className="copyable">+91 97681 46860</span></div>
            </div>
          </div>
          <EnquiryForm email="prayag.agarwal@edasprojects.com">
            <div className="fields">
              <div className="field"><label htmlFor="a-name">Name</label><input id="a-name" type="text" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="a-org">Organisation</label><input id="a-org" type="text" autoComplete="organization" /></div>
              <div className="field"><label htmlFor="a-email">Email</label><input id="a-email" type="email" autoComplete="email" required /></div>
              <div className="field"><label htmlFor="a-phone">Phone</label><input id="a-phone" type="tel" autoComplete="tel" /></div>
              <div className="field"><label htmlFor="a-type">I am a</label><select id="a-type"><option>Developer</option><option>Landowner</option><option>Bank / NBFC</option><option>ARC / fund</option><option>Investor</option></select></div>
              <div className="field"><label htmlFor="a-stage">Project stage</label><select id="a-stage"><option>Land / pre-launch</option><option>Under construction</option><option>Stalled</option><option>Completed</option></select></div>
            </div>
            <div className="field"><label htmlFor="pra-msg">Message</label><textarea id="pra-msg"></textarea></div>
            <div><button className="btn btn-primary" type="submit">Send enquiry</button></div>
          </EnquiryForm>
        </div>
      </section>
    </>
  );
}
