import React from 'react';
import { css } from 'styled-components';
import Sidebar from '../Sidebar';
import Img from 'gatsby-image';
import {breakpoints} from '../../styles/GlobalStyles.js';
import Carousel from '../Carousel';

export default function SingleArtworkPage({ data: { artwork } }) {
  const {mobile} = breakpoints
  console.log(artwork)
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
      <div>
        <Img fluid={artwork?.image?.asset?.fluid}/>
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
    }
  }
  `;