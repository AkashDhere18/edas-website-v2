import ClientMarquee from '@/components/ClientMarquee';

export const metadata = {
  title: "About EDAS Group",
  description: "The founders, team and offices of EDAS Group.",
};

export default function AboutPage() {
  return (
    <>
      <section className="banner">
        <img src="/assets/img/site-about.webp" alt="" fetchPriority="high" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <span className="label">About Us</span>
          <h1>Innovate. Build. Inspire.</h1>
          <p><b className="bn">EDAS</b> brings the people who build projects and the people who finance them to one table.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div className="stack">
            <span className="label">Our story</span>
            <h2>Built to close a gap in real estate.</h2>
          </div>
          <div className="stack">
            <p className="lede">Too often, construction and finance work in separate rooms. <b className="bn">EDAS</b> was founded so that developers, landowners and lenders get one honest view of progress, cost and risk.</p>
            <p className="muted"><b className="bn">EDAS Asset Advisors</b> gives independent technical and financial advice. <b className="bn">EDAS Projects</b> builds homes, hotels and commercial buildings on a turnkey basis. Both work to the same standard.</p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Leadership</span>
              <h2>The founders</h2>
            </div>
          </div>
          <div className="founders">
            <div className="founder">
              <div className="photo"><img src="/assets/img/team-shailesh.webp" alt="Shailesh Dhere" loading="lazy" /></div>
              <h3>Shailesh Dhere</h3>
              <span className="role">Founder · EDAS Group</span>
              <p className="leads">Leads construction and the <b className="bn">EDAS Promise</b></p>
              <p>BE (Civil), PGP in Advanced Construction Management, MBA (NMIMS), with 20+ years in real estate strategy and construction management.</p>
            </div>
            <div className="founder">
              <div className="photo"><img src="/assets/img/team-prayag.webp" alt="Prayag Agarwal" loading="lazy" /></div>
              <h3>Prayag Agarwal</h3>
              <span className="role">Co-Founder · EDAS Asset Advisors</span>
              <p className="leads">Leads the advisory practice</p>
              <p>Chartered accountant with 20+ years in banking and structured credit, focused on real estate lending.</p>
            </div>
            <div className="founder">
              <div className="photo"><img src="/assets/img/team-nilesh.webp" alt="Nilesh Dhere" loading="lazy" /></div>
              <h3>Nilesh Dhere</h3>
              <span className="role">Co-Founder · EDAS Projects</span>
              <p className="leads">Leads site operations and project delivery</p>
              <p>Runs projects across Western Maharashtra, from mobilisation to handover.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Our team</span>
              <h2>The people behind the work</h2>
            </div>
          </div>
          <div className="team">
            <div className="member">
              <div className="photo"><img src="/assets/img/team-pralhad.webp" alt="Pralhad Kharat" loading="lazy" /></div>
              <b>Pralhad Kharat</b>
              <span>Head of Operations &amp; Client Delivery</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-nilesh-k.webp" alt="Nilesh Kumbhar" loading="lazy" /></div>
              <b>Nilesh Kumbhar</b>
              <span>Project Lead, Development Management</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-saurabh.webp" alt="Saurabh Kamble" loading="lazy" /></div>
              <b>Saurabh Kamble</b>
              <span>Project Engineer, Development Management</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-ashutosh.webp" alt="Ashutosh Hiremath" loading="lazy" /></div>
              <b>Ashutosh Hiremath</b>
              <span>Associate, Advisory &amp; Due Diligence</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-darshan.webp" alt="Darshan Bhabuje" loading="lazy" /></div>
              <b>Darshan Bhabuje</b>
              <span>Project Manager, Western Maharashtra</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-sachin.webp" alt="Sachin Hingmire" loading="lazy" /></div>
              <b>Sachin Hingmire</b>
              <span>Project Manager, Execution &amp; Planning</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-akash.webp" alt="Akash Yadav" loading="lazy" /></div>
              <b>Akash Yadav</b>
              <span>Lead, Structural Steel &amp; Fabrication</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-abid.webp" alt="Abid Ali" loading="lazy" /></div>
              <b>Abid Ali</b>
              <span>Project Engineer, Site Delivery</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-suraj.webp" alt="Suraj Ghodake" loading="lazy" /></div>
              <b>Suraj Ghodake</b>
              <span>Manager, Finance &amp; Accounts</span>
            </div>
            <div className="member">
              <div className="photo"><img src="/assets/img/team-vishal.webp" alt="Vishal Wandare" loading="lazy" /></div>
              <b>Vishal Wandare</b>
              <span>Manager, Administration &amp; Workplace</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap">
          <p className="label plain" style={{ justifyContent: "center", width: "100%", color: "var(--ink-2)" }}>Trusted by</p>
          <ClientMarquee />
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label">Offices</span>
              <h2>Where to find us</h2>
            </div>
          </div>
          <div className="offices">
            <div className="office">
              <h3>Mumbai</h3>
              <address>Office 01 &amp; 02, Sai Datta Apartment, near The Ruby, Bal Govind Das Road, Dadar, Mumbai 400028</address>
            </div>
            <div className="office">
              <h3>Miraj</h3>
              <address>Office 105 &amp; 106, Imperial Square, Ramaudyan Road, near ACS College, Miraj–Pandharpur Highway, Miraj, Sangli 416410</address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
