import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
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

const classNames = require('classnames');

function SingleProject({ project }) {
  const [showing, setShow] = useState(false);
  const toggleShow = () => setShow(!showing);

  const projectClasses = classNames({
    tile: true,
    project: true,
    open: showing ? 'open' : '',
    closed: !showing ? 'closed' : '',
  });

  return (
    <OpenTileStyles>
      <div
        // className={hovered ? 'active' : ''}
        className={projectClasses}
        // onMouseLeave={close}
      >
        <div className="tile-inner">
          <div className="overlay flex flex-middle" />
          <div
            className="image"
            style={{
              backgroundImage: `url(${project.image.asset.url})`,
              backgroundSize: 'cover',
            }}
          />
          <div className="text-container small-text">
            <div className="less flex flex-center">
              <div className="arrow">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  onClick={toggleShow}
                  type="button"
                />
              </div>
            </div>
            <h2>
              <span>{project.name}</span>
            </h2>
            <p> {project.skills.map((skill) => skill.name)}</p>
            <Link
              to={`/project/${project.slug.current}`}
              asModal
              // onClick={close}
            >
              See More
            </Link>
          </div>
          <div className="actions-container flex-middle flex-center flex flex-column">
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
      />

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
    infinite: false,
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
