'use client';

import { useEffect, useRef, useState } from 'react';

export default function CopyButton({ text }) {
  const [label, setLabel] = useState('Copy');
  const btnRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // fallback: select the address next to the button so it can be copied by hand
  const selectNear = () => {
    const s = btnRef.current?.parentNode?.querySelector('.copyable');
    if (!s) return;
    const r = document.createRange();
    r.selectNodeContents(s);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  };

  const onClick = () => {
    const done = () => {
      setLabel('Copied');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setLabel('Copy'), 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, selectNear);
    else selectNear();
  };

  return (
    <button ref={btnRef} className="copy-btn" type="button" data-copy={text} onClick={onClick}>
      {label}
    </button>
  );
}
