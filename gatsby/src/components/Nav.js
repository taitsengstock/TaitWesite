import React from 'react';
import { Link } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  @media (max-width: 980px) {
    justify-content: center;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
