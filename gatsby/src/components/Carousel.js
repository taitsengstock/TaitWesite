import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import { ChevronLeft, ChevronRight } from './Svg.js';


export default function Carousel({ children, slidesDesktop, slidesMobile, center }) {

    const [hovered, setHovered] = useState(false)
    const customSlider = useRef();
    const {mobile} = breakpoints

    const ArrowContainerStyles = `
      display: grid;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in-out;
      z-index: 3;
      pointer-events: none;
      padding: var(--spacing-05);
      position: relative;
      &:after{
        content: '';
        background: linear-gradient(var(--white),var(--border-color) 10%,var(--border-color),var(--border-color) 90%,var(--white));
        width: 1px;
        position: absolute;
        top: 0;
        bottom: 0;
        display: block;
      }
      ${mobile}{
        display: none;
      }
    `
    const ArrowButtonStyles = `
      align-self: center;
      pointer-events: auto;
      width: 32px;
      height: 32px;
      display: grid;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      // background: #fff;
      border: 1px solid var(--border-color);
    `


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // centerPadding: "100px",
        slidesToShow: slidesDesktop,
        arrows: center,
        // centerMode: center,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: slidesDesktop,
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
          css={css`height: 100%;`}
      >
        <div 
          onClick={() => customSlider.current.slickPrev()}
          css={css`
            position: relative;
            display: grid;
            grid-template-columns: min-content repeat(10, 1fr) min-content;
            padding: 0 var(--spacing-05);
            margin-bottom: var(--spacing-07);
            height: 100%;
            ${mobile}{
              grid-template-columns: minmax(0, 1fr);
            }
          `}
        >
          <div css={css`
              ${ArrowContainerStyles}
              &:after{
                right: 0px;
              }
            `}>
            <div
              onClick={() => customSlider.current.slickPrev()}
              type="button"
              css={css`
                ${ArrowButtonStyles}
                grid-column: 1/2;
              `}
            >
              <ChevronLeft css={css`
                width: var(--font-regular);
                height: var(--font-regular);
                display: block;
              `}/>
            </div>
          </div>
          <Slider 
              {...settings} 
              ref={(slider) => (customSlider.current = slider)}
              css={css`
                grid-column: 2/12;
                min-width: 0;
                .slick-list, .slick-track{
                  height: 100%;
                }
                .slick-slide{
                  transition: 0.2s all;
                  opacity: 0.6;
                  border-radius: var(--size-05);
                  overflow: hidden;
                  margin-top: var(--spacing-07);
                  height: calc(100% - (var(--spacing-07) * 2));
                }
                .slick-slide.slick-active {
                  opacity: 1;
                }
              `}>
              {children}
          </Slider>
          <div css={css`
            ${ArrowContainerStyles}
            &:after{
              left: 0px;
            }
          `}>
            <div
              onClick={() => customSlider.current.slickNext()}
              type="button"
              css={css`
                ${ArrowButtonStyles}
                grid-column: 1/2;
              `}
            >
              <ChevronRight css={css`
                width: var(--font-regular);
                height: var(--font-regular);
                display: block;
              `}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  