import React, { useContext } from 'react';
import ListViewContext from '../ListViewContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquare,
  faTh,
} from '@fortawesome/free-solid-svg-icons';
import { CarouselIcon, GridlIcon } from '../Svg';
import GhostButton from '../GhostButton';


export default function ListToolbar() {

  const [view, setView] = useContext(ListViewContext)

  return (
    <div css={css`
        display: grid;
        grid-template-columns: 1fr;
        padding: var(--spacing-05); 
    `}>
      <div css={css`
          justify-self: end;
      `}>
        <GhostButton 
          onClick={() => setView('carousel')}
          css={css`
            height: 32px;
            width: 32px;
        `}>
          <CarouselIcon 
            css={css`
              width: var(--font-regular);
              height: var(--font-regular);
              display: block;
              color: var(--text-color);
              margin-right: 0.5rem;
          `}/>
        </GhostButton>
        <GhostButton 
          onClick={() => setView('grid')}
          css={css`
          height: 32px;
          width: 32px;
        `}>
          <GridlIcon 
            css={css`
              width: var(--font-regular);
              height: var(--font-regular);
              display: block;
              color: var(--text-color);
          `}/>
        </GhostButton>
      </div> 
    </div>
  );
}