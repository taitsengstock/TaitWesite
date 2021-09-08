import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import Img from 'gatsby-image';
import { ChevronLeft, Collapse, Expand } from './Svg.js';
import { useSiteState } from "../context/siteContext"
import GhostButton from './GhostButton/index.js';


export default function Sidebar( {className, children} ) {

  const { mobile } = breakpoints

  const [sidebarOpen, setSidebarOpen] = useState(undefined)
  const [siteState, setSiteState] = useSiteState()

  useEffect(()=> {
    setSidebarOpen(siteState.sidebarExpanded)
  }, [siteState.sidebarExpanded])

  return (
    <div 
      className={className}
      css={css`
        display: grid;
        grid-template-columns: 1fr minmax(0px, 1140px) 1fr;
        padding: var(--spacing-07);
      `}
    >
      <div css={css`
      `}></div>
      <div css={css`
      `}> 
        {children}
      </div>
      <div></div>
    </div>
  );
}
