import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import Nav from './Nav.js';
import 'normalize.css';
import GlobalStyles, {breakpoints} from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';

const {mobile} = breakpoints

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 6rem auto 6rem auto;
  ${mobile} {
    margin: 3rem auto 2rem auto;
  }
  @media (max-width: 1040px) {
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
