import React, { useContext } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import HomeLoadingGrid from '../components/HomeLoadingGrid';
import useLatestData from '../utils/useLatestData';
import HomeMainSection from '../components/HomeMainSection';
import HomeLoadingMainSection from '../components/HomeLoadingMainSection';
import { Section } from '../components/Section';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import StoreViewContext from '../components/StoreViewContext';


export default function HomePage({ data }) {

  const [storeView, setStoreView] = useContext(StoreViewContext)
  
  console.log(`data`, data)
  const projects = storeView === `design` ? data?.allSanityProject?.edges : data?.allSanityArtwork?.edges

  return (
      <div css={css`
        display: grid;
        grid-template-columns: 25% 1fr;
        min-height: calc(100vh - (var(--size-13) + var(--size-12)));
      `}>
        <Sidebar />
        <ProjectGrid projects={projects} css={css`max-width: 1140px; display: grid;`}/>
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