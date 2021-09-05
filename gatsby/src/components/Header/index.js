import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import {breakpoints} from '../../styles/GlobalStyles.js';
import Nav from '../Nav.js';
import { Section } from '../Section/index.js';
import TitleSection from '../TitleSection/index.js';
import useLatestData from '../../utils/useLatestData';
import StoreViewContext from '../StoreViewContext';

const { mobile } = breakpoints

function FeaturedPerson({ person }) {
  return (
    <>
        <TitleSection 
          person={person} 
        />
    </>
  );
}

export default function Header({ className }) {
  
  const headerData = useStaticQuery(graphql`
    query {
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
  `)

  const people = headerData.allSanityPerson.nodes


  return (
    <div 
      className={className}
      css={css`
        display: grid;
        border-bottom: 1px solid var(--grey);
        height: var(--size-12);
      `}
    >
      
      {people.map(person => (
        <FeaturedPerson 
          person={person}
      />
      ))}
      <Nav css={css`
        grid-column: max-content;
      `}/>
    </div>
  );
}
