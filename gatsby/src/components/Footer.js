import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <p className="footerText">&copy; MJF {new Date().getFullYear()}</p>
    </div>
  );
}
