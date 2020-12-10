import { graphql } from 'gatsby';
import React from 'react';
import Pizzalist from '../components/PizzaList';

export default function PizzasPage({ data }) {
  console.log(data);
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <Pizzalist pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
