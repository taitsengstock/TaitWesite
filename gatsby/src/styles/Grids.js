import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100%;
  }
  .container {
    margin: 4rem 0;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const HomeLoadingGridStyles = styled.div`
  .loading-item {
    padding-top: 77%;
  }
  .loading-slider-arrows .loading-item {
    padding-top: 0;
    padding: 0px;
    margin: 1rem;
    height: 1em;
    width: 0.625em;
  }
  .slick-slider {
    margin: -1rem;
  }
  .slick-slide {
    padding: 2rem 1rem;
    box-sizing: border-box;
  }
`;

export const HomeMainStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .round {
    max-width: 33vw;
  }
`;

export const HomeLoadingMainStyles = styled(HomeMainStyles)`
  .loading-item.round {
    padding-top: 100%;
  }
  @media (max-width: 980px) {
    .loading-item.round {
      padding-top: 33vw;
      margin: 0 auto;
    }
  }
`;

export const CarouselStyles = styled.div`
  .slick-slider {
    margin: -1rem;
  }
  .slick-slide {
    padding: 2rem 1rem;
    box-sizing: border-box;
  }
  .arrow {
    margin: 1rem;
  }
`;
export const OpenTileStyles = styled.div`
  border-radius: var(--standard-radius);
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  padding-top: 77%;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: var(--shadow);
  }
  :hover .overlay {
    opacity: 0;
  }
  .open .overlay {
    opacity: 0;
  }
  .tile-inner {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .overlay {
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0;
    pointer-events: none;
    padding: 40px;
    background: var(--black);
    position: absolute;
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    box-sizing: border-box;
  }
  .image {
    transition: margin-top 0.2s;
    padding-top: 77%;
    background-size: cover;
    background-repeat: no-repeat;
    transition-delay: 0.2s;
  }
  .open .image {
    margin-top: -77%;
  }
  .text-container {
    flex: 1;
    padding: 1rem 2rem 2rem;
  }
  .actions-container {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease-in-out;
  }
  .closed .actions-container {
    max-height: 100%;
    opacity: 1;
    transition-delay: 0.4s;
  }
  .open .actions-container {
    opacity: 0;
    pointer-events: none;
  }

  .actions-container .actions {
    height: 0px;
    transition: height 0.2s ease-in-out;
  }
  :hover .actions-container .actions {
    height: 40px;
  }
  .logo {
    z-index: 4;
    padding: 0px 40px;
    width: 100%;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    opacity: 1;
    box-sizing: border-box;
  }
  :hover .logo {
    transform: scale(0.8);
  }
  .actions-container .logo img {
    max-width: 100%;
    transition: max-height 0.2s ease-in-out;
    transition-delay: 0.2s;
  }
  .more {
    bottom: 0%;
    z-index: 99;
    text-align: center;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    color: #fff;
  }
  :hover .more {
    opacity: 1;
  }
  .less {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .open .less {
    opacity: 1;
    transition-delay: 0.4s;
  }
  @media (max-width: 980px) {
    .overlay {
      opacity: 0.4;
    }
    .actions-container .actions {
      height: 40px;
    }
    .logo {
      transform: scale(0.8);
    }
    .more {
      opacity: 1;
    }
  }
`;

export const OpenSkillTileStyles = styled.div`
  .tile {
    padding-top: 20px;
    padding: 5px;
    display: flex;
    flex-wrap: nowrap;
    background: rgb(160, 50, 255);
    background: linear-gradient(
      0deg,
      rgba(160, 50, 255, 1) 0%,
      rgba(50, 98, 255, 1) 100%
    );
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;
    border-radius: 8px;
  }
  .tile-inner {
    transition: background-color 200ms linear;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
  }
  .tile.closed .tile-inner {
    background-color: rgba(255, 255, 255, 0);
    transition-delay: 0.4s;
  }
  .tile.open .tile-inner {
    background-color: rgba(255, 255, 255, 1);
  }
  .image-container {
    padding-top: 0px;
    width: 100%;
    min-height: 140px;
    border-radius: 4px 4px 0 0;
    transition: min-height 0.2s ease-in-out;
  }
  :hover .image-container {
    min-height: 120px;
  }
  .tile.open .image-container {
    margin-top: 0px;
  }
  .text-container {
    display: block;
    position: relative;
    z-index: 2;
    background: #fff;
    border-radius: 0 0 4px 4px;
    height: 97px;
    transition: height 0.2s ease-in-out;
    padding: 10px 20px;
  }
  :hover .text-container {
    height: 117px;
  }
  .title-container {
    text-align: center;
    margin-bottom: 30px;
    transition: opacity 200ms linear;
    opacity: 1;
  }
  .tile.open .title-container {
    opacity: 0;
  }
  .tile.closed .title-container {
    transition-delay: 0.4s;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .details-container {
    position: absolute;
    height: 100%;
    width: 100%;
    padding-top: 100%;
    transition: padding-top 0.2s;
    transition-delay: 0.2s;
    transition-delay: 0.2s;
    top: 0;
    box-sizing: border-box;
  }
  .details-container .description {
    margin-top: 0%;
    padding: 2rem;
    transition: margin-top 0.2s;
  }
  .tile.open .details-container {
    padding-top: 30px;
  }
  .logo {
    padding: 0px;
  }
  .actions-container {
    position: absolute;
    height: 40px;
    z-index: 99;
    bottom: 0px;
    top: auto;
    transition: height 0s ease-in-out;
    transition-delay: 0.2s;
    width: 100%;
  }
  .open .actions-container {
    height: calc(100% - 1rem);
  }
  .actions-container .actions {
    transition: height 0.2s ease-in-out;
    text-align: center;
    bottom: auto;
    z-index: auto;
    padding: unset;
    height: 0px;
  }
  :hover .actions-container .actions {
    opacity: 1;
    height: 20px;
  }
  .tile:hover .actions {
    height: 20px;
  }
  .open .actions {
    animation: fade;
    animation-duration: 0.6s;
  }
  .closed .actions-container .actions {
    animation: fadeback;
    animation-duration: 0.6s;
  }
  .skill .tile.open .actions-container {
    height: calc(100% - 20px);
  }
  .arrow {
    transform-origin: center center;
    transition: transform 0s;
    transition-delay: 0.2s;
  }
  .open .arrow {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .arrow svg {
    opacity: 0;
    transition: opacity 0.3s;
    color: var(--black);
  }
  :hover .arrow svg {
    opacity: 1;
  }
`;
