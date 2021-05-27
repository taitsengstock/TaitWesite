import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';


const ArrowContainer = styled.div`
  display: grid;
  position: absolute;
  height: 100%;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
  z-index: 3;
  pointer-events: none;
`

const ArrowButton = styled.button`
  align-self: center;
  pointer-events: auto;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #ffffff69;
  display: grid;
  justify-content: center;
  align-items: center;
`

export default function Carousel({ children, slidesDesktop, slidesTablet, slidesMobile }) {

    const [hovered, setHovered] = useState(false)

    const customSlider = useRef();

    const renderLeftArrow = () => (
      <ArrowContainer css={css`
          top: 0;
          left: ${hovered ? `20px` : `0`};
      `}>
        <ArrowButton
          onClick={() => customSlider.current.slickPrev()}
          type="button"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
          />
        </ArrowButton>
      </ArrowContainer>
    );
    const renderRightArrow = () => (
      <ArrowContainer css={css`
        top: 0;
        right: 20px;
        
      `}>
        <ArrowButton
          onClick={() => customSlider.current.slickNext()}
          type="button"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
          />
        </ArrowButton>
      </ArrowContainer>
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesDesktop,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: slidesTablet,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: slidesMobile,
              slidesToScroll: 1,
            },
          },
        ],
    };
  
    return (
      <div 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)}
      >
        <div 
          onClick={() => customSlider.current.slickPrev()}
          css={css`
            position: relative;
          `}
        >
        {renderLeftArrow()}
        <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
            {children}
        </Slider>
        {renderRightArrow()}
        </div>
        </div>
    );
  }
  