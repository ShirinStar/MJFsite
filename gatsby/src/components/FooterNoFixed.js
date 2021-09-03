import React from 'react';

export default function FooterNotFixed() {
  return (
    <div className="footer footerNot">
      <p className="footerText">&copy; MJF {new Date().getFullYear()}</p>
    </div>
  );
}
