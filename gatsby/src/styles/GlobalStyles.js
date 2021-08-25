import React from 'react';
import { createGlobalStyle } from 'styled-components';
import stripes from '../assets/images/stripes.svg';

export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }

const { mobile } = breakpoints

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
    // Primary Tokens
    --red: #FF4949;
    --darkRed: #d73131;
    --blue: #00077b;
    --black: #2E2E2E;
    --yellow: #dfff00;
    --white: #fff;
    --light-grey: #fafafc;
    --grey: #ececee;
    --shadow: 0 1px 24px rgba(30,30,40,0.1);
    --standard-radius: 8px;
    // Secondary tokens
    --text-color: var(--black);
    --ghost: var(--grey);
    --button-radius: calc(var(--standard-radius) / 2);
    --background-color: var(--light-grey);
    --border-color: var(--grey);
    // Font Sizes
    --font-xsmall: 10px;
    --font-small: 14px;
    --font-regular: 16px;
    --font-large: 10px;
    --font-xlarge: 20px;
    --font-xxlarge: 27px;
    --font-xxxlarge: 60px;
    ${mobile}{
      --font-xsmall: 10px;
      --font-small: 12px;
      --font-regular: 16px;
      --font-large: 17px;
      --font-xlarge: 18px;
      --font-xxlarge: 19px;
      --font-xxxlarge: 36px;
    }
    //Spacing Tokens
    --spacing-01:	0.125rem;	
    --spacing-02:	0.25rem;	
    --spacing-03:	0.5rem;	
    --spacing-04:	0.75rem;	
    --spacing-05:	1rem;
    --spacing-06:	1.5rem;		
    --spacing-07:	2rem;	
    --spacing-08:	2.5rem;		
    --spacing-09:	3rem;	
    --spacing-10:	4rem;		
    --spacing-11:	5rem;	
    --spacing-12:	6rem;	
    --spacing-13:	10rem;
    //Sizing Tokens
    --size-01:	0.125rem;	
    --size-02:	0.25rem;	
    --size-03:	0.5rem;	
    --size-04:	0.75rem;	
    --size-05:	1rem;
    --size-06:	1.5rem;		
    --size-07:	2rem;	
    --size-08:	2.5rem;		
    --size-09:	3rem;	
    --size-10:	4rem;		
    --size-11:	5rem;	
    --size-12:	6rem;	
    --size-13:	10rem;
  }
  html {
    font-size: 10px;
    color: var(--text-color);
    background-color: var(--background-color);
  }
  body {
    font-size: var(--font-regular);
  }
  
  h1, .h1{
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
  }

  button, .button {
    border: 0;
    display: inline-block;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
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
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
    width: 100%;
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
  @keyframes Shimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  ul {
    padding-inline-start: 10px;
    list-style-type: disc;
  }
  li {
      list-style-position: inside;
  } 

  .arrow {
    cursor: pointer;
  }

  .loading-item {
    background-image: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII=');
    position: relative;
    background: --black;
    background: linear-gradient(
      to right,
      #2e2e2e 0%,
      #3b3a3a 50%,
      #2e2e2e 100%
    );
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: Shimmer;
    animation-timing-function: linear;
    background-size: 200% 200%;
    border-radius: 8px;
  }

  .loading-item.light {
    background: --grey;
    background: linear-gradient(
      to right,
      #efefef 0%,
      #f4f4f4 50%,
      #efefef 100%
    );
  }

  body.ReactModal__Body--open {
    overflow-y: hidden;
  }
  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`

export default GlobalStyles;
