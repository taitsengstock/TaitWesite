import { graphql } from 'gatsby';
import React from 'react';
import ProjectList from '../components/ProjectList';

export default function ProjectsPage({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject {
      nodes {
        name
        id
        slug {
          current
        }
        logo {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
        skills {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
