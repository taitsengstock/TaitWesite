  import React, { useRef, useState } from 'react';
  import { graphql } from 'gatsby';
  import Img from 'gatsby-image';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import styled from 'styled-components';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
  faChevronLeft,
  faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  import {breakpoints} from '../../styles/GlobalStyles.js';
  import Sidebar from '../Sidebar.js';
  import Carousel from '../Carousel.js';
  import Label from '../Label.js'
  import { useSiteState } from "../../context/siteContext"

  const {mobile} = breakpoints

  const SliderStyles = styled.div`
  margin: 20px 20px 40px;
  position: relative;
  overflow: hidden;
  min-width: 0;
  .slick-slide {
    max-height: 70vh;
  }
  .slick-slide.slick-active.slick-current {
    max-height: 100%;
  }
    .arrow{
    top: 30vh;
    position: absolute;
    z-index: 1;
    transition: all 0.2s ease-in-out;
  }
  .slick-dots {
    position: relative;
    bottom: 0;
  }
  `;

  export default function SingleProjectPage({ data: { project, allSanityProject } }) {
    const {mobile, tablet} = breakpoints
    const [hovered, setHovered] = useState(false)
    const projects = allSanityProject.edges
    const [siteState, setSiteState] = useSiteState()

    return (
      <div css={css`
        display: grid;
        grid-template-columns: clamp(0%, 75%, 90vh) 1fr;
        /* padding: var(--spacing-07); */
        grid-column-gap: var(--spacing-05);
        ${mobile}{
          grid-template-columns: 1fr;
        }
      `}>
        <div css={css`display: none; ${mobile}{display: block;}`}>
          <h1 className="h2" css={css`margin-bottom: var(--spacing-07);`}>{project.name}</h1>
        </div>
        <Carousel 
          slidesDesktop={1} 
          slidesMobile={1} 
          fixedArrows
          center={false}
          >
            {project.imagesGallery.map((galleryImage) => (
              <Img fluid={galleryImage.asset.fluid} css={css`
                border-radius: 8px;
                .gatsby-image-wrapper {
                  display: block;
                }
              `}/>
            ))}
        </Carousel>
        <div css={css`
          padding-top: calc(37px + var(--spacing-05));
        `}>
          <h1 className="h2" css={css`margin-bottom: var(--spacing-07);${mobile}{display: none;}`}>{project.name}</h1>
          <div css={css`
            list-style-type: none;
            padding-inline-start: 0px;
            margin-bottom: var(--spacing-05);
          `}>
            {project.skills.map((skill) => (
              <Label key={skill.id} className="label">{skill.name}</Label>
            ))}
          </div>
          <p>
            {project.description}
          </p>
        </div>
      </div>
    );
  }

  // this needs to be dynamic based on the slug passed in via gatsby-node.js
  export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      skills {
        name
        id
      }
      description
      imagesGallery {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    allSanityProject {
      edges {
        node {
          id
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
          logoicon {
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
        }
      }
    }
  }
  `;
