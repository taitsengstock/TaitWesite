import React, { useContext, useEffect, useLayoutEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import {breakpoints} from '../styles/GlobalStyles.js';
import { useSiteState } from "../context/siteContext"

export default function HomePage({ data }) {

  const {tablet, mobile} = breakpoints

  const projects = data?.allSanityArtwork?.edges

  const [siteState, setSiteState] = useSiteState()

  useEffect(()=> {
    setSiteState(prevState => ({
      ...prevState,
      pageTitle: `art`,
      storeView: `art`,
      theme: `art`,
    }))
  }, [])

  return (
    <div>
      <div css={css`
        display: grid;
        grid-template-columns: max-content 1fr;
        min-height: var(--body-height);
        ${tablet}{
          grid-template-columns: 1fr;
        }
      `}>
        <Sidebar css={css`${tablet}{grid-row: 2;}`} />
        <ProjectGrid projects={projects} css={css`max-width: 1140px; display: grid; padding: var(--spacing-07);`}/>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityArtwork {
      edges {
        node {
          _type
          name
          description
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
              url
              metadata {
                lqip
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;