import React, { useState, useRef } from 'react';
import useOutsideClick from "../../utils/useOutsideClick"
import { Link } from 'gatsby';
import {breakpoints} from '../../styles/GlobalStyles.js';
import Carousel from '../Carousel';
import { css } from 'styled-components'
import Button from '../Button/index.js'

const {tablet} = breakpoints

const Card = ({ project, type }) => {
  const tileRef = useRef()
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const projectLength = project?.node?.skills?.length

  useOutsideClick(tileRef, () => {
    setOpen(false)
  })

  const projectType = ()=> {
    if(type === 'project'){
      return 'design'
    }
    if(type === 'artwork'){
      return 'art'
    }
  }
  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      css={css`
        border: 1px solid var(--border-color);
        border-radius: var(--size-05);
        overflow: hidden; 
        background-color: ${hovered ? `var(--light-grey)` : `var(--background-color)`};
    `}
    ref={tileRef}
    >
      <Link 
      to={`/${projectType()}/${project?.node?.slug?.current}`}
      >
        <div 
        css={css`
          display: grid;
        `}>
          <div css={css`
          `}>
            <div css={css`
              overflow: hidden;
            `}>
              <div css={css`
                transition: transform 0.3s;
                transform: ${hovered ? `scale(1.05)` : `scale(1)`};
              `}>
                <img
                  src={`${project?.node?.image?.asset?.url}`}
                  // alt={person.name}
                  css={css`display: block;`}
                />
              </div>
            </div>
            <div css={css`padding: var(--spacing-05); `}>
              <div css={css`
                margin-bottom: var(--spacing-05); 
                display: grid; 
                grid-template-columns: max-content 1fr;
                align-items: center;
              `}>
                {type === `project` &&
                  <img
                  src={`${project?.node?.logoicon?.asset?.url}`}
                  css={css`
                    border-radius: 50%;
                    max-width: var(--size-09);
                    margin-right: var(--spacing-05);
                    border: 1px solid var(--grey);
                  `}
                />
                }
                <h4 css={css``}>{project?.node?.name}</h4>
              </div>
              {/* <p css={css`margin-bottom: var(--spacing-05); font-size: var(--font-small);`}>{project?.node?.description}</p> */}
              <p css={css`margin-bottom: var(--spacing-05); font-size: var(--font-small);`}>
                {project?.node?.skills?.map((skill, index) => (
                  <span>{skill.name}{projectLength === index + 1 ? ``: `, `}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
  }

  Card.propTypes = {

  }
  
  Card.defaultProps = {
    primary: true,
    children: 'Add To Cart',
    large: false,
    to: '/test'
  }

  export default Card