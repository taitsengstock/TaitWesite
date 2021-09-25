import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Footer from './Footer.js';
import Nav from './Nav.js';
import 'normalize.css';
import GlobalStyles, {breakpoints} from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';
import Header from './Header/index.js';
import Reset from '../styles/Reset.js';
import { useSiteState, useUrlLocation } from "../context/siteContext"
import Sidebar from './Sidebar.js';
import Main from './Main.js';
import Container from './Container.js';


export default function Layout({ children }) {

  useUrlLocation()

  const {mobile, tablet} = breakpoints
  const [siteState, setSiteState] = useSiteState()  

  const removeOverlay = ()=> {
    setSiteState(prevState => ({
      ...prevState,
      selectOpen: false,
    }))
  }

  return (
    <>
      <Reset />
      <GlobalStyles />
      <Typography />
      <Overlay
        onClick={() => removeOverlay()}
        css={css`
          opacity: ${siteState.selectOpen ? `0.3` : `0`};
          pointer-events: ${siteState.selectOpen ? `all` : `none`};
          transition: opacity 0.3s;
      `}/>
      <div css={css`
        overflow: visible;
      `}>
        <Header 
        css={css` 
        `}/>
          <Container>
            <Sidebar 
            css={css`
              ${tablet}{grid-row: 2;}
            `} />
            <Main css={css`
            `}>
            {children}
            </Main>
          </Container>
        <Footer />
      </div>
    </>
  )
}

const Overlay = styled.div`
  background-color: var(--dark-grey);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`