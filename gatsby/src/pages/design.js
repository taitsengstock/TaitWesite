import React, { useContext, useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { graphql } from 'gatsby';
import {breakpoints} from '../styles/GlobalStyles.js';
import { useSiteState } from "../context/siteContext"
import Container from '../components/Container';


export default function DesignPage({ data }) {

  const {tablet, mobile} = breakpoints
  const projects = data?.allSanityProject?.edges

  const [siteState, setSiteState] = useSiteState()

  useEffect(()=> {
    setSiteState(prevState => ({
      ...prevState,
      sidebarExpanded: true,
    }))
  }, [])

  return (
      <ProjectGrid 
        projects={projects} 
        css={css`
          display: grid;
          /* opacity: ${siteState.location === `/${siteState.storeView}` ? `1` : `0`};
          transition: opacity 0.5s;  */
        `}
      />
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