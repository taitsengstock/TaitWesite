import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import Img from 'gatsby-image';
import { ChevronLeft } from './Svg.js';

const { mobile } = breakpoints


export default function Sidebar( {className, related} ) {

  const relatedItems = related

  return (
    <div 
      className={className}
      css={css`
        border-right: 1px solid var(--border-color);
        padding: var(--spacing-07);
    `}>
      {related &&
      <>
        <Link to={`/`} css={css`display: block; margin-bottom: var(--spacing-07);`}>
          <ChevronLeft css={css`
            width: var(--font-regular);
            height: var(--font-regular);
            display: inline-block;
          `}/>
          Back
        </Link>
        <div css={css`display: grid; grid-template-columns: 1fr; grid-row-gap: var(--spacing-05);`}>
          <h3 css={css`margin-bottom: var(--spacing-03);`}>Related</h3>
          {relatedItems.map(relatedItem => (
            <Link to={`/${relatedItem.node?._type}/${relatedItem.node?.slug?.current}`}>
              <div css={css`
                display: grid; 
                grid-template-columns: 25% 1fr; 
                grid-column-gap: var(--spacing-05); 
                align-items: center;
                &:hover{
                  background: var(--light-grey);
                }
              `}>
                  {console.log(relatedItem)}
                  <div>
                    <Img fluid={relatedItem.node?.image?.asset?.fluid} css={css`
                      .gatsby-image-wrapper {
                        display: block;
                      }
                    `}/>
                  </div>
                  <div>
                  <h4>{relatedItem.node?.name}</h4>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </>
      }
    </div>
  );
}
