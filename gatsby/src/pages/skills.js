import React, { useContext } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import StoreViewContext from '../components/StoreViewContext';
import {breakpoints} from '../styles/GlobalStyles.js';


export default function SkillsPage({ data }) {

  const [storeView, setStoreView] = useContext(StoreViewContext)
  const {tablet, mobile} = breakpoints
  const projects = storeView === `design` ? data?.allSanityProject?.edges : data?.allSanityArtwork?.edges

  return (
    <div>
      <div css={css`
        display: grid;
        grid-template-columns: 25% 1fr;
        min-height: var(--body-height);
        ${tablet}{
          grid-template-columns: 1fr;
        }
      `}>
        <Sidebar css={css`${tablet}{grid-row: 2;}`} />
        <div css={css`max-width: 1140px; padding: var(--spacing-07);`}>
          <h1>Skills</h1>
        </div>
      </div>
    </div>
  );
}