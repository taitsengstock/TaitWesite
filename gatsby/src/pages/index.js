import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { graphql, Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import {breakpoints} from '../styles/GlobalStyles.js';
import { useSiteState } from "../context/siteContext"
import Button from '../components/Button';

export default function HomePage({ data }) {

  const {tablet, mobile} = breakpoints
  const [siteState, setSiteState] = useSiteState()  
  

  const profile = data.allSanityPerson?.nodes[0]
  console.log(`profile`, profile)

  useEffect(()=> {
    setSiteState(prevState => ({
      ...prevState,
      sidebarExpanded: false,
    }))
  }, [])

  return (
    <div css={css`margin-top: var(  --spacing-09);`}>
      <h1>Tait Sengtock</h1>
      <p css={css`
        margin-bottom: var(--spacing-07);
        font-size: var(--font-large);
      `}>
        Melbourne based creative practitioner.
      </p>
      <div 
        css={css`
          display: grid;
          grid-template-columns: repeat(2, max-content);
          column-gap: var(--spacing-05);
      `}>
        <Button to={`/art`} inline={true}> See Art</Button>
        <Button to={`/design`} inline>See Design</Button>
      </div>
    </div>
  );
}


export const query = graphql`
  query {
    designStore: allSanityStoreSettings(filter: {_id: {eq: "355799ff-8bb5-41ba-aebf-a53817ca9fe8"}}) {
      nodes {
        _id
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
            url
          }
        }
      }
    }
    artStore: allSanityStoreSettings(filter: {_id: {eq: "a88ed9b8-7922-442d-8abe-adb283a20cd9"}}) {
      nodes {
        _id
        image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
      }
    }
    allSanityPerson {
      nodes {
        name
        image {
          asset {
            url
          }
        }
      }
    }

  }
`;