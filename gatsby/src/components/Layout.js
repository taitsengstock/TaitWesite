import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Footer from './Footer.js';
import Nav from './Nav.js';
import 'normalize.css';
import GlobalStyles, {breakpoints} from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';
import Header from './Header/index.js';
import Reset from '../styles/Reset.js';


const {mobile} = breakpoints


export default function Layout({ children }) {

  return (
    <>
      <Reset />
      <GlobalStyles />
      <Typography />
      <div css={css`overflow-Y: hidden; `}>
        <Header css={css`
            `}/>
            {children}
          <Footer />
      </div>
    </>
  )
}
