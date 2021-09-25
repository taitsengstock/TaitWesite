import React, { useContext, useEffect, useLayoutEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import {breakpoints} from '../styles/GlobalStyles.js';
import { useSiteState } from "../context/siteContext"
import Main from '../components/Main';
import Container from '../components/Container';

export default function HomePage({ data }) {

  const {tablet, mobile} = breakpoints

  const projects = data?.allSanityArtwork?.edges

  const [siteState, setSiteState] = useSiteState()

  return (
    <ProjectGrid projects={projects} css={css`display: grid;`}/>
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