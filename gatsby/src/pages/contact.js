import React from 'react';
import { css } from 'styled-components';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import {breakpoints} from '../styles/GlobalStyles.js';

export default function ContactPage() {

  const {tablet, mobile} = breakpoints
  return (
    <div css={css`
    `}>
        <h1 css={css`margin-bottom: var(--spacing-03);`}>Contact</h1>
        <p css={css`margin-bottom: var(--spacing-10);`}>For now just send me an email at taitsengstock@gmail.com</p>
    </div>
  );
}
