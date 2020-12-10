import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function SinglePIzzaPage({ data: { pizza } }) {
  console.log(pizza);
  return (
    <div>
      <Img fluid={pizza.image.asset.fluid} />
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping.id}>{topping.name}</li>
        ))}
      </ul>
    </div>
  );
}

// this needs to be dynamic based on the slug passed in via gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
