import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';
import montserratLight from './Typography.css';
import openSansBold from './Typography.css';
import BaskervilleBold from './Typography.css';
import BaskervilleRegular from './Typography.css';

export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }
const { mobile } = breakpoints

const Typography = createGlobalStyle`
  html {
    font-family: IBMPlexSansRegular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-color);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: IBMPlexSansMedium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--text-color);
    text-decoration-color: var(--text-decoration-color);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
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
`;

export default Typography;
