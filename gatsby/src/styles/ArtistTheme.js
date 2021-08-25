
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }

const { mobile } = breakpoints



const ArtistTheme = createGlobalStyle`

  html {
    background-color: var(--blue);
  }

`

export default ArtistTheme;