import React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="footer">
          <p>&copy; MJF {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
