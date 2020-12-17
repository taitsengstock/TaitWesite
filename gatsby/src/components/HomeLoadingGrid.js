import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ItemsGrid, HomeLoadingGridStyles } from '../styles/Grids';

export default function LoadingGrid({ count }) {
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
    <HomeLoadingGridStyles>
      <div className="loading-slider-arrows flex flex-end">
        <div className="loading-item light" />
        <div className="loading-item light" />
      </div>
      {/* <ItemsGrid> */}
      <Slider {...settings}>
        {Array.from({ length: count }, (_, i) => (
          <div className="loading-item-container">
            <div className="loading-item" />
          </div>
        ))}
      </Slider>
      {/* </ItemsGrid> */}
    </HomeLoadingGridStyles>
  );
}
