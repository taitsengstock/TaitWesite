import React from 'react';
import { Section } from './Section';

export default function Footer() {
  return (
    <div css={css`
      height: var(--size-11);
      display: grid;
      align-items: center;
      border-top: 1px solid var(--border-color);
    `}>
      <div css={css`
        padding: 0 var(--spacing-07);
      `}>
      <p css={css`font-size: var(--font-small);`}>
        &copy; Tait Sengstock {new Date().getFullYear()}
      </p>
      </div>
    </div>
  );
}
