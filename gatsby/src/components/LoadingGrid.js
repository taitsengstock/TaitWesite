import React from 'react';

import {
  CarouselStyles,
  HomeLoadingGridStyles,
  ItemsGrid,
} from '../styles/Grids';

export default function LoadingGrid({ count }) {
  return (
    <HomeLoadingGridStyles>
      <CarouselStyles>
        <ItemsGrid>
          {Array.from({ length: count }, (_, i) => (
            <>
              <div className="loading-item" />
            </>
          ))}
        </ItemsGrid>
      </CarouselStyles>
    </HomeLoadingGridStyles>
  );
}
