import React, { useRef } from 'react';
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

const SliderStyles = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  position: relative;

  .slick-slide {
    max-height: 70vh;
  }
  .slick-slide.slick-active.slick-current {
    max-height: 100%;
  }
  .arrow.prev,
  .arrow.next {
    top: 30vh;
    position: absolute;
  }
  .arrow.prev {
    left: 0px;
  }
  .arrow.next {
    right: 0px;
  }
`;

export default function SingleProjectPage({ data: { project } }) {
  const customSingleSlider = useRef();
  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  };

  return (
    <div>
      <h1>{project.name}</h1>
      <ul>
        {project.skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <SliderStyles>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow prev"
          onClick={() => customSingleSlider.current.slickPrev()}
          type="button"
        />
        <Slider
          {...settings}
          ref={(slider) => (customSingleSlider.current = slider)}
        >
          {project.imagesGallery.map((galleryImage) => (
            <Img fluid={galleryImage.asset.fluid} />
          ))}
        </Slider>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow next"
          onClick={() => customSingleSlider.current.slickNext()}
          type="button"
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
