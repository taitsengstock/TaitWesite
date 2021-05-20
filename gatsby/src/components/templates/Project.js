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

const {mobile} = breakpoints

const SliderStyles = styled.div`
  margin: 20px 20px 40px;
  position: relative;
  overflow: hidden;
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
  const customSingleSlider = useRef();
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  
  return (
    <div>
      <div css={css`
      padding: 20px;
      `}>
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
      <SliderStyles       
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow prev"
          onClick={() => customSingleSlider.current.slickPrev()}
          type="button"
          css={css`
            left: ${hovered ? '40px' : '0'};
            opacity: ${hovered ? '1' : '0'};
          `}
        />
        <Slider
          {...settings}
          ref={(slider) => (customSingleSlider.current = slider)}
          css={css`
            .slick-dots {
              li {
                button {
                  box-shadow: none;
                }
              }
            }
          `}
        >
          {project.imagesGallery.map((galleryImage) => (
            <Img fluid={galleryImage.asset.fluid} css={css`
              border-radius: 8px;
              .gatsby-image-wrapper {
                display: block;
              }
            `}/>
          ))}
        </Slider>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow next"
          onClick={() => customSingleSlider.current.slickNext()}
          type="button"
          css={css`
            right: ${hovered ? '40px' : '0'}; 
            opacity: ${hovered ? '1' : '0'};
          `}
        />
      </SliderStyles>
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
