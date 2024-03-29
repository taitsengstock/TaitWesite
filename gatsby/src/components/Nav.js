import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import Button from './Button/index.js';

const { mobile } = breakpoints


export default function Nav({className}) {
  return (
    <nav className={className} css={css`
      display: grid;
      justify-self: end;
      padding: 0 var(--spacing-07); 
      ${mobile}{
        justify-content: center;
      }
    `}>
      <div css={css`
        margin: 0;
        padding: 0;
        text-align: center;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: var(--spacing-05);
        align-items: center;
      `}>
          <Button to="/contact">Contact</Button>
      </div>
    </nav>
  );
}
