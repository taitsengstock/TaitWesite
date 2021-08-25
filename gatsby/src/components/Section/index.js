import React from 'react';
import {breakpoints} from '../../styles/GlobalStyles.js';

const { mobile } = breakpoints

export const Section = ({ children, className }) => (
  <section className={className}>
    <div css={css`
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: var(----spacing-07);
      `
    }>
    {children}
    </div>
  </section>
)