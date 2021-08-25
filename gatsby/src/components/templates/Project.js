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

  export default function SingleProjectPage({ data: { project } }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div css={css`
      display: grid;
      grid-template-columns: 25% 1fr;
      min-height: calc(100vh - (var(--size-13) + var(--size-12)));
    `}>
      <Sidebar />
      <div css={css`
        display: grid;
        grid-template-columns: 75% 1fr;

      `}>
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
        <div>
          <h1 className="h2">{project.name}</h1>
          <ul css={css`
            list-style-type: none;
            padding-inline-start: 0px;
          `}>
            {project.skills.map((skill) => (
              <li key={skill.id} className="label">{skill.name}</li>
            ))}
          </ul>
        </div>
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
      imagesGallery {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
  `;
