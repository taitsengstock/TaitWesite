import React from 'react';
// import { Link } from 'gatsby-plugin-modal-routing';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'gatsby';

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link
        to={`/pizza/${pizza.slug.current}`}
        // asModal
        // state={{
        //   modal: true,
        // }}
      >
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p> {pizza.toppings.map((topping) => topping.name)}</p>
        <Img fluid={pizza.image.asset.fluid} />
      </Link>
    </div>
  );
}

export default function Pizzalist({ pizzas }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Slider {...settings}>
        {pizzas.map((pizza) => (
          <SinglePizza key={pizza.id} pizza={pizza} />
        ))}
      </Slider>
    </div>
  );
}
