import React from 'react';
import { css } from 'styled-components';
import Sidebar from '../Sidebar';

export default function SingleArtworkPage({ data: { artwork } }) {
  return(
    <div css={css`
      display: grid;
      grid-template-columns: 25% 1fr;
      min-height: var(--body-height);
    `}>
      <Sidebar />
      <div>artwork</div>
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