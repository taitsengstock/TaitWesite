import React, { useState, useRef } from 'react';
import useOutsideClick from "../../utils/useOutsideClick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby-plugin-modal-routing';
import {breakpoints} from '../../styles/GlobalStyles.js';
import Carousel from '../Carousel';
import { css } from 'styled-components'

const {tablet} = breakpoints

const Card = ({ project }) => {
  const tileRef = useRef()
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mobileToggleOpen = () => {
    if (window.matchMedia("(max-width: 700px)").matches) {
    setOpen(!open)
    } else {
      return null
    }
  };
  useOutsideClick(tileRef, () => {
    console.log(open)
    setOpen(false)
  })

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      css={css`
      padding: var(--spacing-05);
    `}
    ref={tileRef}
    >
      <div css={css`
      `}>
        <div 
          onClick={() => setOpen(!open)}
          css={css`
            background-image: url(${project?.image?.asset?.url});
            background-size: cover;
            height: 100%;
            position: relative;
            padding-bottom: 77%;
        `}>
          <div css={css`
            position: absolute;
            z-index: 3;
            display: grid;
            align-items: center;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          `}>
              <img 
                src={`${project?.logo?.asset?.url}`} 
                alt={project?.name} 
              />
          </div>
        </div>
        <div css={css`
          display: grid;
        `}>
          text box
          <Link
            asModal
            to={`/project/${project?.slug?.current}`}
          >
            see more
          </Link>
        </div>
      </div>
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