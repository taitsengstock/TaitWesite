import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const HomeMainStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;
  max-width: 800px;
  margin: 0 auto;
  img {
  }
`;

export default function HomeMainSection({ person }) {
  return (
    <div>
      {person.map((featuredPerson) => (
        <HomeMainStyles>
          <div>
            <div>
              <img
                src={`${featuredPerson.image.asset.url}`}
                alt={featuredPerson.name}
                className="round"
              />
            </div>
          </div>
          <div className="large-text flex flex-center flex-column">
            <h1>{featuredPerson.name}</h1>
            <p>
              {/* {featuredPerson.description} */}
              Designing websites using{' '}
              <span className="mark tilt large-text">React!</span>
            </p>
          </div>
        </HomeMainStyles>
      ))}
    </div>
  );
}
