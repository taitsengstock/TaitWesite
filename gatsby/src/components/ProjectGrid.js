  import React, { useContext, useRef } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
  faChevronLeft,
  faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  // @ts-ignore
  import {breakpoints} from '../styles/GlobalStyles.js';
  import Card from './Card/index.js';
  import Carousel from './Carousel';
  import ListViewContext from './ListViewContext';
import ListToolbar from './ListToolbar/ListToolbar.js';

  const {tablet} = breakpoints

  export default function ProjectGrid({ projects }) {
    const [view, setView] = useContext(ListViewContext)
    return (
      <>
        <ListToolbar />
        { projects ?
          <>
            { !view || view === 'carousel' ?
              <Carousel slidesDesktop={3} slidesTablet={3} slidesMobile={3} fixedArrows>
                {projects.map((project) => (
                  <Card key={project.id} project={project} />
                ))}
              </Carousel>
              : <div css={css`
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
              `}> 
                  {projects.map((project) => (
                    <Card key={project.id} project={project} />
                  ))}
                </div>
              }
          </> 
        : null }
      </>
    );
  }
