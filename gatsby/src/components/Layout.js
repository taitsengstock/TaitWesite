import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import Nav from './Nav.js';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  /* padding: clamp(5px, 1vw, 25px); */
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  box-shadow: 0px 0rem 5rem 0rem #dadada;
  transition: height 0.3s ease;
  border-radius: var(--standard-radius);
  background: var(--white);
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        <ContentStyles>
          {/* <Nav /> */}
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
