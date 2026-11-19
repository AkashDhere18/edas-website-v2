'use client';

import { useState } from 'react';

// Enquiry form. There is no backend yet: on a valid submit it shows the same
// "Thank you" note as the original site, pointing people to the email address.
export default function EnquiryForm({ email, children }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
  };

  return (
    <>
      <form className="card form" data-enquiry={email} noValidate onSubmit={onSubmit}>
        {children}
      </form>
      {sent && (
        <div className="form-ok" role="status">
          <b>Thank you.</b> Online enquiries are being set up. Until then, please write to{' '}
          <span className="copyable">{email}</span> and the team will reply within one working day.
        </div>
      )}
    </>
  );
}
