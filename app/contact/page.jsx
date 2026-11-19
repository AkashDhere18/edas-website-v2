import { ArrowIcon } from '@/components/Icons';
import CopyButton from '@/components/CopyButton';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: "Contact EDAS",
  description: "Contact EDAS Asset Advisors or EDAS Projects.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="label">Contact Us</span>
          <h1>Let’s talk.</h1>
          <p className="lede">Choose the right team below, or send a general message. We reply within one working day.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap contact-cards">
          <div className="card ccard">
            <span className="entity" style={{ fontSize: ".76rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: "600" }}>Advisory</span>
            <b>Prayag Agarwal</b>
            <div className="row"><span className="copyable">prayag.agarwal@edasprojects.com</span><CopyButton text="prayag.agarwal@edasprojects.com" /></div>
            <div className="row"><span className="copyable">+91 97681 46860</span></div>
          </div>
          <div className="card ccard">
            <span className="entity" style={{ fontSize: ".76rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: "600" }}>Construction &amp; villas</span>
            <b>Shailesh Dhere</b>
            <div className="row"><span className="copyable">shailesh.dhere@edasprojects.com</span><CopyButton text="shailesh.dhere@edasprojects.com" /></div>
            <div className="row"><span className="copyable">+91 99751 35552</span></div>
          </div>
          <div className="card ccard">
            <span className="entity" style={{ fontSize: ".76rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: "600" }}>Site operations</span>
            <b>Pralhad Kharat</b>
            <div className="row"><span className="copyable">operations@edasprojects.com</span><CopyButton text="operations@edasprojects.com" /></div>
            <div className="row"><span className="copyable">+91 87679 56623</span></div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div className="stack">
            <span className="label">Offices</span>
            <h2>Visit us</h2>
            <div className="offices" style={{ gridTemplateColumns: "1fr", marginTop: "8px" }}>
              <div className="office">
                <h3>Mumbai</h3>
                <address>Office 01 &amp; 02, Sai Datta Apartment, Bal Govind Das Road, Dadar, Mumbai 400028</address>
                <a className="more" href="https://www.google.com/maps/search/?api=1&query=Sai+Datta+Apartment+Bal+Govind+Das+Road+Dadar+Mumbai" target="_blank" rel="noopener">
                  Open in Maps
                  <ArrowIcon />
                </a>
              </div>
              <div className="office">
                <h3>Miraj</h3>
                <address>Office 105 &amp; 106, Imperial Square, Ramaudyan Road, Miraj, Sangli 416410</address>
                <a className="more" href="https://www.google.com/maps/search/?api=1&query=Imperial+Square+Ramaudyan+Road+Miraj" target="_blank" rel="noopener">
                  Open in Maps
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <EnquiryForm email="coordination@edasprojects.com">
            <div className="fields">
              <div className="field"><label htmlFor="g-name">Name</label><input id="g-name" type="text" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="g-email">Email</label><input id="g-email" type="email" autoComplete="email" required /></div>
              <div className="field"><label htmlFor="g-phone">Phone</label><input id="g-phone" type="tel" autoComplete="tel" /></div>
              <div className="field"><label htmlFor="g-topic">This is about</label><select id="g-topic"><option>Advisory</option><option>Construction</option><option>A villa on my plot</option><option>Something else</option></select></div>
            </div>
            <div className="field"><label htmlFor="coo-msg">Message</label><textarea id="coo-msg"></textarea></div>
            <div><button className="btn btn-primary" type="submit">Send message</button></div>
          </EnquiryForm>
        </div>
      </section>
    </>
  );
}
