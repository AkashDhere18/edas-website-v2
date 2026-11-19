import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="top">
          <div className="stack" style={{ gap: '16px' }}>
            <span className="logo-plate">
              <img src="/assets/img/logo.png" alt="EDAS, Innovate | Build | Inspire" width="520" height="124" />
            </span>
            <p style={{ maxWidth: '38ch' }}>Real estate advisory and turnkey construction, under one accountable partner.</p>
            <p className="lines">
              From plan to possession · From capital to closure
              <br />
              From stress to strength · From land to landmark
            </p>
          </div>
          <div>
            <h4>Businesses</h4>
            <ul>
              <li><Link href="/advisory">EDAS Asset Advisors</Link></li>
              <li><Link href="/construction">EDAS Projects</Link></li>
              <li><Link href="/the-edas-promise">The EDAS Promise</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li>Dadar, Mumbai 400028</li>
              <li>Miraj, Sangli 416410</li>
              <li><span className="copyable">coordination@edasprojects.com</span></li>
              <li><span className="copyable">+91 99751 35552</span></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <p>EDAS Projects Private Limited (GSTIN 27AAICE4972E2ZG) and EDAS Asset Advisors LLP.</p>
          <p>&copy; 2026 EDAS Group · Innovate | Build | Inspire</p>
        </div>
      </div>
    </footer>
  );
}
