import React, { useState, useRef, useContext } from 'react';
// import { Link } from 'gatsby-plugin-modal-routing';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { CarouselStyles, OpenSkillTileStyles } from '../styles/Grids';
import TileContext from './TileContext';

const classNames = require('classnames');

function SingleSkill({ skill }) {
  
  
  const [tilesIsShowing, setTileIsShowing] = useContext(TileContext);

  const [showing, setShow] = useState(false);

  const toggleShow = (event) => {
    let containerTile = event.target.closest('.tile')
    let OtherTiles = document.querySelectorAll('.tile')
    setTileIsShowing(!tilesIsShowing);
    setShow(!showing);
    console.log(tilesIsShowing)
  }

  const skillClasses = classNames({
    tile: true,
    skill: true,
    open: showing ? 'open' : '',
    closed: !showing ? 'closed' : '',
  });

  return (
    <OpenSkillTileStyles>
      <div
        // className={hovered ? 'active' : ''}
        className={skillClasses}
        // onMouseLeave={close}
      >
        <div className="tile-inner">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${skill.image.asset.url})`,
              backgroundSize: 'auto 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat-x',
            }}
          />
          <div className="text-container small-text">
            <div className="title-container">
              <h3>{skill.name}</h3>
            </div>
          </div>
          <div className="details-container">
            <div className="description">{skill.description}</div>
          </div>

          <div className="actions-container flex-center flex">
            <div className="actions more">
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
    </OpenSkillTileStyles>
  );
}

export default function HomeProjectGrid({ skills }) {
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
        {skills.map((skill) => (
          <SingleSkill key={skill.id} skill={skill} />
        ))}
      </Slider>
    </CarouselStyles>
  );
}
