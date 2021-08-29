import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import { ChevronLeft, ChevronRight } from './Svg.js';
import Img from 'gatsby-image';


export default function Carousel({ children, slidesDesktop, slidesMobile, center }) {

    console.log(`children`, children)
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
      position: relative;
      // &:after{
      //   content: '';
      //   background: linear-gradient(var(--white),var(--border-color) 10%,var(--border-color),var(--border-color) 90%,var(--white));
      //   width: 1px;
      //   position: absolute;
      //   top: 0;
      //   bottom: 0;
      //   display: block;
      // }
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
    const SliderCss = css`
      grid-column: 2/12;
      min-width: 0;
      .slick-list {
        margin-top: calc(37px + var(--spacing-05));
      }
      .slick-list, .slick-track{
        height: 100%;
      }
      .slick-slide{
        transition: 0.2s all;
        opacity: 0.6;
        border-radius: var(--size-05);
        overflow: hidden;
        /* height: calc(100vh - (69px + 19rem)); */
      }
      .slick-slide.slick-active {
        opacity: 1;
      }
      .slick-dots {
        top: 0;
        text-align: left;
        bottom: auto;
        li {
          overflow: hidden;
          border: 1px solid var(--grey);
          width: 30px;
          height: 30px;
          opacity: 0.5;
          transition: opacity 0.3s;
          &.slick-active{
            opacity: 1;
          }
        }

      }
    `
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // centerPadding: "100px",
        slidesToShow: slidesDesktop,
        arrows: center,
        customPaging: function(i) {
          return (
            <a>
              <Img fluid={children[i]?.props.fluid} />
            </a>
          );
        },
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
            margin-bottom: var(--spacing-07);
            height: 100%;
            ${mobile}{
              grid-template-columns: minmax(0, 1fr);
            }
          `}
        >
          <div css={css`
              ${ArrowContainerStyles}
              padding: 0 var(--spacing-05) 0 0;
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
              css={SliderCss}>
              {children}
          </Slider>
          <div css={css`
            ${ArrowContainerStyles}
            padding: 0 0 0 var(--spacing-05);
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
  