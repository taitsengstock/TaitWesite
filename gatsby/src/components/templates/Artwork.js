import React from 'react';
import { css } from 'styled-components';
import Sidebar from '../Sidebar';
import Img from 'gatsby-image';
import {breakpoints} from '../../styles/GlobalStyles.js';
import Carousel from '../Carousel';

export default function SingleArtworkPage({ data: { artwork } }) {
  const {mobile} = breakpoints
  return(
    <div css={css`
      display: grid;
      grid-template-columns: clamp(0%, 75%, 90vh) 1fr;
      grid-column-gap: var(--spacing-05);
      ${mobile}{
        grid-template-columns: 1fr;
      }
    `}>
      <div css={css`display: none; ${mobile}{display: block;}`}>
        <h1 className="h2" css={css`margin-bottom: var(--spacing-07);`}>{artwork.name}</h1>
      </div>
      <Carousel 
        slidesDesktop={1} 
        slidesMobile={1} 
        fixedArrows
        center={false}
        >
          {/* {artwork.imagesGallery.map((galleryImage) => (
            <Img fluid={galleryImage.asset.fluid} css={css`
              border-radius: 8px;
              .gatsby-image-wrapper {
                display: block;
              }
            `}/>
          ))} */}
      </Carousel>
      <div css={css`
        padding-top: calc(37px + var(--spacing-05));
      `}>
        <h1 className="h2" css={css`margin-bottom: var(--spacing-07);${mobile}{display: none;}`}>{artwork.name}</h1>
        <div css={css`
          list-style-type: none;
          padding-inline-start: 0px;
          margin-bottom: var(--spacing-05);
        `}>
          {/* {artwork.skills.map((skill) => (
            <Label key={skill.id} className="label">{skill.name}</Label>
          ))} */}
        </div>
        <p>
          {artwork.description}
        </p>
      </div>
    </div>
  )
}

  // this needs to be dynamic based on the slug passed in via gatsby-node.js
  export const query = graphql`
  query($slug: String!) {
    artwork: sanityArtwork(slug: { current: { eq: $slug } }) {
      name
      id
    }
  }
  `;