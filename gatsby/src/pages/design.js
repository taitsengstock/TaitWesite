import React, { useContext, useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import {breakpoints} from '../styles/GlobalStyles.js';
import { useSiteState } from "../context/siteContext"


export default function HomePage({ data }) {

  const {tablet, mobile} = breakpoints
  // console.log(`data`, data)
  const projects = data?.allSanityProject?.edges

  const [siteState, setSiteState] = useSiteState()

  useEffect(()=> {
    setSiteState(prevState => ({
      ...prevState,
      pageTitle: `design`,
      storeView: `design`,
      theme: `design`,
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
        <ProjectGrid 
          projects={projects} 
          css={css`
            max-width: 1140px; 
            display: grid; 
            padding: var(--spacing-07);
          `}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityProject {
      edges {
        node {
          _type
          name
          description
          skills {
            name
            id
          }
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
          logo {
            asset {
              url
            }
          }
          logoicon {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;