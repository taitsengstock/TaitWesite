import { createGlobalStyle } from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #dfff00;
    --white: #fff;
    --grey: #efefef;
    --shadow: 0 1px 24px rgba(30,30,40,0.1);
    --standard-radius: 8px;
  }
  html {
    font-size: 10px;
    background-color: #e9e9ea;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }

  img {
    max-width: 100%;
    width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  /* Animations  */
  @-webkit-keyframes fade {
      0% { opacity: 1; filter:alpha(opacity=100); }
      33% { opacity: 0; filter:alpha(opacity=0); }
      66% { opacity: 0; filter:alpha(opacity=0); }
      100% { opacity: 1; filter:alpha(opacity=100); }
  }

  @keyframes fade {
      0% { opacity: 1; filter:alpha(opacity=100); }
      33% { opacity: 0; filter:alpha(opacity=0); }
      66% { opacity: 0; filter:alpha(opacity=0); }
      100% { opacity: 1; filter:alpha(opacity=100); }
  }

  @-webkit-keyframes fadeback {
      0% { opacity: 1; filter:alpha(opacity=100); }
      33% { opacity: 0; filter:alpha(opacity=0); }
      66% { opacity: 0; filter:alpha(opacity=0); }
      100% { opacity: 1; filter:alpha(opacity=100); }
  }

  @keyframes fadeback {
      0% { opacity: 1; filter:alpha(opacity=100); }
      33% { opacity: 0; filter:alpha(opacity=0); }
      66% { opacity: 0; filter:alpha(opacity=0); }
      100% { opacity: 1; filter:alpha(opacity=100); }
  }
  ul {
    padding-inline-start: 10px;
    list-style-type: disc;
  }
  li {
      list-style-position: inside;
  } 
  .flex {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  .flex-wrap {
    -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  }
  .flex-middle {
    -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
  }
  .flex-end {
    -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
  }
  .flex-start {
    -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
  }
  .flex-center {
    -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
  }
  .flex-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  }
  .flex-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .pull-right {
    margin-left: auto;
  }
  .round {
    border-radius: 50%;
  }
  .arrow {
    cursor: pointer;
  }
`;

export default GlobalStyles;
