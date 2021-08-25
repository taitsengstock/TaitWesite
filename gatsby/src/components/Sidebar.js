import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';

const { mobile } = breakpoints


export default function Sidebar( {className} ) {
  return (
    <div 
      className={className}
      css={css`
        border-right: 1px solid var(--border-color);
        padding: var(--spacing-07);
    `}>
      
    </div>
  );
}
