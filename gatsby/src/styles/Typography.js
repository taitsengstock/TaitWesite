import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';
import montserratLight from './typography.css';
import openSansBold from './typography.css';

export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }
const { mobile } = breakpoints

const Typography = createGlobalStyle`

  html {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: OpenSansBold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline-block;
    line-height: 1;
  }

  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }
  .large-text {
    font-size: 1.4em;
  }
  .small-text {
    font-size: 0.8em;
    ${mobile} {
      font-size: 1em;
    }
  }


`;

export default Typography;
