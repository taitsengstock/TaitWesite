import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Section } from './Section/index.js';

export default function HomeMainSection({ person, className }) {
  return (
    <>
      {person.map((featuredPerson) => (
        <Section className={className}>
          <div>
              <img
                src={`${featuredPerson.image.asset.url}`}
                alt={featuredPerson.name}
                className="round"
              />
          </div>
          <div >
            <h1>{featuredPerson.name}</h1>
            <p>
              Designing websites using{' '}
              <span className="mark tilt">React!</span>
            </p>
          </div>
        </Section>
      ))}
    </>
  );
}
