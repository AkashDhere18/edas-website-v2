import CopyButton from '@/components/CopyButton';

export const metadata = {
  title: "Careers at EDAS",
  description: "Careers at EDAS Group.",
};

export default function CareersPage() {
  return (
    <>
      <section className="banner">
        <img src="/assets/img/site-turnkey.webp" alt="" fetchPriority="high" style={{ objectPosition: "center" }} />
        <div className="wrap">
          <span className="label">Careers</span>
          <h1>Grow where the site meets the spreadsheet.</h1>
          <p>Join a young, growing team and work directly with the founders.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-3">
          <div className="stack" style={{ gap: "8px" }}>
            <h3>Real responsibility, early</h3>
            <p className="muted">Small teams mean you own outcomes on live sites and mandates.</p>
          </div>
          <div className="stack" style={{ gap: "8px" }}>
            <h3>Two disciplines</h3>
            <p className="muted">Engineers learn finance; analysts learn the site.</p>
          </div>
          <div className="stack" style={{ gap: "8px" }}>
            <h3>Founders as mentors</h3>
            <p className="muted">Learn from decades in construction and real estate credit.</p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div className="stack">
            <span className="label">Disciplines</span>
            <h2>Tell us where you fit</h2>
            <p className="muted">We hire as projects grow. Send your CV and we will keep it on file for the next opening.</p>
            <ul className="chips">
              <li>Site engineering</li>
              <li>Project management</li>
              <li>Quantity surveying</li>
              <li>Procurement</li>
              <li>Design coordination</li>
              <li>Real estate analysis</li>
              <li>Due diligence</li>
              <li>Finance &amp; accounts</li>
            </ul>
          </div>
          <div className="card ccard">
            <h3>Send your CV</h3>
            <p className="muted">Mention your discipline and preferred location: Mumbai, Alibaug or Miraj.</p>
            <div className="row"><span className="copyable">coordination@edasprojects.com</span><CopyButton text="coordination@edasprojects.com" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
