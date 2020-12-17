import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { HomeLoadingMainStyles } from '../styles/Grids';

export default function HomeLoadingMainSection() {
  return (
    <div>
      <HomeLoadingMainStyles>
        <div>
          <div className="loading-item round light" />
        </div>
        <div className="large-text flex flex-center flex-column ">
          <h1 className="loading-item light">&nbsp;</h1>
          <p className="large-text loading-item light">&nbsp;</p>
        </div>
      </HomeLoadingMainStyles>
    </div>
  );
}
