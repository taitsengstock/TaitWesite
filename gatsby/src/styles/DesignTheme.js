
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }

const { mobile } = breakpoints



const DesignTheme = createGlobalStyle`

  html {
    background-color: var(--red);
  }


  /* h1, .h1{
    font-size: var(--font-xxxlarge);
    line-height: 1.3;
  }

  h2, .h2{
    font-size: var(--font-xxlarge);
    line-height: 1.3;
  }

  h3, .h3{
    font-size: var(--font-xlarge);
    line-height: 1.3;
  }

  h4, .h4{
    font-size: var(--font-small);
    line-height: 1.3;
    text-transform: uppercase;
  }

  body, .p{
    line-height: 1.3;
  }

  p{
    margin-bottom: 0.5em;
    &:last-child{
      margin-bottom: 0;
    }
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  } */

  button, .button {
    &:hover {
      background: var(--darkRed);
    }
  }
`

export default DesignTheme;