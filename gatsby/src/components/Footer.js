import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="small-text">
        &copy; Tait's Website {new Date().getFullYear()}
      </p>
    </footer>
  );
}
