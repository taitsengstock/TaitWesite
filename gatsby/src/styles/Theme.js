
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }

const { mobile } = breakpoints
 
const Theme = createGlobalStyle`
    :root {
      --text-color: ${props => (props.theme === 'design' ? 'var(--black)' : 'var(--black)')};
      --background-color: ${props => (props.theme === 'design' ? 'var(--white)' : 'var(--light-grey)')};
    }
    html {
      /* font-family: ${props => (props.theme === 'design' ? 'Montserrat, -apple-system' : 'BaskervilleRegular, -apple-system')}; */
    }
    h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
      font-family: ${props => (props.theme === 'design' ? 'IBMPlexSansMedium, -apple-system' : 'BaskervilleRegular, -apple-system')}; 
      letter-spacing: 0.02em;
  }
`

export default Theme;