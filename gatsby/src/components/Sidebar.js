import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import Img from 'gatsby-image';
import { ChevronLeft, Collapse, Expand } from './Svg.js';
import { useSiteState } from "../context/siteContext"
import GhostButton from './GhostButton/index.js';


export default function Sidebar( {className, related} ) {

  const { mobile } = breakpoints

  const relatedItems = related
  const [sidebarOpen, setSidebarOpen] = useState(undefined)
  const [siteState, setSiteState] = useSiteState()

  useEffect(()=> {
    setSidebarOpen(siteState.sidebarExpanded)
  }, [siteState.sidebarExpanded])

  return (
    <div 
      className={className}
      css={css`
      border-right: 1px solid var(--border-color);
      min-width: ${siteState.sidebarExpanded ? `25vw` : `30px`};
      transition: min-width 0.3s;
    `}>
      <div css={css`
        display: grid;
        justify-items: flex-end;
        padding: var(--spacing-05);
        border-bottom: 1px solid var(--border-color);
      `}>
        <GhostButton
          onClick={()=> setSiteState(prevState => ({
            ...prevState,
            sidebarExpanded: !sidebarOpen,
          }))}
          css={css`
            padding: var(--spacing-03);
        `}>
          { siteState.sidebarExpanded ?
            <Collapse css={css`
              width: var(--font-xlarge);
              height: var(--font-xlarge);
              display: inline-block;
            `}/> 
            :
            <Expand css={css`
              width: var(--font-xlarge);
              height: var(--font-xlarge);
              display: inline-block;
            `}/>  
          }
        </GhostButton>
      </div>
      <div css={css`
        padding: var(--spacing-07) 0;
      `}>
        {related &&
        <>
          <Link to={`/`} css={css`display: grid; padding: 0 var(--spacing-07); margin-bottom: var(--spacing-07); grid-template-columns: max-content max-content; align-items: center;`}>
            <ChevronLeft css={css`
              width: var(--font-regular);
              height: var(--font-regular);
              display: inline-block;
              margin-bottom: 1px;
            `}/>
            Back
          </Link>
          <div css={css`display: grid; grid-template-columns: 1fr; grid-row-gap: var(--spacing-05);`}>
            <h4 css={css`margin-bottom: var(--spacing-03); padding: 0 var(--spacing-07);`}>Related</h4>
            {relatedItems.map(relatedItem => (
              <Link to={`/${relatedItem.node?._type}/${relatedItem.node?.slug?.current}`}>
                <div css={css`
                  display: grid; 
                  grid-template-columns: 25% 1fr; 
                  grid-column-gap: var(--spacing-05); 
                  padding: 0 var(--spacing-07);
                  align-items: start;
                  &:hover{
                    background: var(--hover);
                  }
                `}>
          
                    <div>
                      <Img fluid={relatedItem.node?.image?.asset?.fluid} css={css`
                        .gatsby-image-wrapper {
                          display: block;
                        }
                      `}/>
                    </div>
                    <div>
                    <h5 css={css`padding: var(--spacing-03) 0;`}>{relatedItem.node?.name}</h5>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </>
        }
      </div>
    </div>
  );
}
