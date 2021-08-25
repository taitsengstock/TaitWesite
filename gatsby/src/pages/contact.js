import React from 'react';
import { css } from 'styled-components';
import Sidebar from '../components/Sidebar';

export default function ContactPage() {
  return (
    <div css={css`
        display: grid;
        grid-template-columns: 25% 1fr;
        min-height: calc(100vh - (var(--size-13) + var(--size-12)));
      `}>
        <Sidebar />
        <div>
          <h1>Contact</h1>
          <p>For now just send me an email at taitsengstock@gmail.com</p>
        </div>
      </div>
  );
}
