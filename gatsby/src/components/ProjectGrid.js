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
  import { Section } from './Section/index.js';

  export default function ProjectGrid({ projects, className }) {

    const {tablet, mobile} = breakpoints
    const [view, setView] = useContext(ListViewContext)

    return (
      <Section 
        className={className} 
        css={css` 
        & > div{
          grid-template-rows: max-content 1fr;
        } 
      `}>
        { projects ?
          <div css={css`
            grid-column: 1/13;
          `}>
            { !view || view === 'carousel' ?
              <Carousel 
              slidesDesktop={1} 
              slidesMobile={1} 
              fixedArrows
              center={true}
              >
                {projects.map((project) => (
                  <Card key={project.id} project={project} type={project?._type}/>
                ))}
              </Carousel>
              : <div css={css`
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: var(--spacing-07);
                grid-row-gap: var(--spacing-07);
                ${tablet}{
                  grid-template-columns: 1fr 1fr;
                }
                ${mobile}{
                  grid-template-columns: 1fr;
                }
              `}> 
                  {projects.map((project) => (
                    <Card key={project.id} project={project} type={project?.node?._type} />
                  ))}
                </div>
              }
          </div> 
        : null }
      </Section>
    );
  }
