import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import useOutsideClick from "../utils/useOutsideClick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import { Link } from 'gatsby-plugin-modal-routing';
import { CarouselStyles, OpenTileStyles } from '../styles/Grids';
import {breakpoints} from '../styles/GlobalStyles.js';

const {tablet} = breakpoints



const classNames = require('classnames');

function SingleProject({ project }) {
  const tileRef = useRef()
  const [showing, setShow] = useState(false);
  const toggleShow = () => setShow(!showing);

  const mobileToggleShow = () => {
   if (window.matchMedia("(max-width: 700px)").matches) {
    setShow(!showing)
   } else {
     return null
   }
  };

  const projectClasses = classNames({
      tile: true,
      project: true,
      open: showing ? 'open' : '',
      closed: !showing ? 'closed' : '',
  });

  useOutsideClick(tileRef, () => {
    setShow(false)
  });


  return (
    <OpenTileStyles >
      <div     
        className={projectClasses}
        onClick={mobileToggleShow}
        // ref={tileRef}
      >
        <div className="tile-inner">
          <div className="overlay flex flex-middle"/>
          <div
            className="image"
            style={{
              backgroundImage: `url(${project.image.asset.url})`,
              backgroundSize: 'cover',
            }}
            
          />
          <div className="text-container" css={css`
            display: grid;
            grid-template-rows: min-content 1fr;
          `}>
            <div className="less flex flex-center">
              <div className="arrow">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  onClick={toggleShow}
                  type="button"
                />
              </div>
            </div>
            <div css={css`
              display: flex;
              justify-content: center;
              flex-direction: column;
            `}>
              <h2 className="h3">
                <span>{project.name}</span>
              </h2>
              <p css={css`
                margin-bottom: 20px;
              `}> {project?.skills?.slice(0, 3).map((skill, index) => 
                <span css={css`
                  display: inline-block;
                  font-size: 0.9em;
                  ${tablet} {
                    font-size: 1em;
                  }
                  &:not(:last-child):after {
                    content: ',';
                    display: inline;
                    margin-right: 7px;
                    background-color: ${skill.color};
                  }
                `}>
                  {skill.name}
                </span>
                )}
              </p>
              <div>
                <Link
                  to={`/project/${project?.slug?.current}`}
                  asModal
                  className="button"
                >
                  View Samples
                </Link>
              </div>
            </div>
          </div>
          <div 
          className="actions-container flex-middle flex-center flex flex-column" 
          onClick={toggleShow}
          type="button"
          css={css`
            cursor: pointer;
          `}>
            <div className="logo">
              <img src={`${project.logo.asset.url}`} alt={project.name} />
            </div>
            <div className="actions flex flex-center">
              <div className="more">
                <div className="arrow">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={toggleShow}
                    type="button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OpenTileStyles>
  );
}

export default function HomeProjectGrid({ projects }) {
  const customSlider = useRef();

  const renderArrows = () => (
    <div className="slider-arrows flex flex-end">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="arrow prev"
        onClick={() => customSlider.current.slickPrev()}
        type="button"
        display={customSlider.current === 2 ? "none" : "block"}
        
      />
      {console.log(customSlider.current)}
      <FontAwesomeIcon
        icon={faChevronRight}
        className="arrow next"
        onClick={() => customSlider.current.slickNext()}
        type="button"
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarouselStyles>
      {renderArrows()}
      <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </Slider>
    </CarouselStyles>
  );
}
