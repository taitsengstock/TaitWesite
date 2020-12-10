import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderStyles = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  .slick-slide {
    max-height: 70vh;
  }
  .slick-slide.slick-active.slick-current {
    max-height: 100%;
  }
  .slick-prev,
  .slick-next {
    top: 30vh;
  }
`;

export default function SingleProjectPage({ data: { project } }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <Slider {...settings}>
          {project.imagesGallery.map((galleryImage) => (
            <Img fluid={galleryImage.asset.fluid} />
          ))}
        </Slider>
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
