import React, { useContext, useEffect, useState } from 'react';
import StoreViewContext from '../StoreViewContext';
import DropDownSelect from '../DropDownSelect';
import { Link, navigate } from "gatsby"
import { css } from 'styled-components';
import { useSiteState } from "../../context/siteContext"


export default function TitleSection({ person, className }) {

  const [siteState, setSiteState] = useSiteState()
  const [selectedOption, setSelectedOption] = useState()

  const changeStoreView = (selected) => {
    if (selected === `home`) {
      return
    } else {
      setSiteState(prevState => ({
        ...prevState,
        pageTitle: selected,
        // storeView: selected,
      }))
      navigate(`/${selected}`)
    }
  }

  const navigateHome = () => {
    if(siteState.location !== "/"){
      setSiteState(prevState => ({
        ...prevState,
        pageTitle: undefined,
        // storeView: undefined,
      }))
      setSelectedOption(false)
      navigate(`/`)
    }
  }


  return (
    <div 
      className={className}
      css={css`
        display: grid;
        grid-template-columns: max-content 1fr;
        padding:  0 var(--spacing-07); 
        align-items: center;
        grid-column-gap: var(--spacing-05);
      `}
    >
        <div css={css`
          display: grid;
          grid-template-columns: max-content max-content;
          align-items: center;
          /* padding: 0 var(--spacing-05); */
          position: relative;
          z-index: 5;
        `}>
          <button onClick={() => navigateHome()} >
            <div css={css`display: flex; align-items: center;`}>
              <h3 css={css`color: var(--dark-grey); font-size: var(--font-large);`}>
                {person.name}/
              </h3>
            </div>
          </button>
            <DropDownSelect 
              options={[
                {
                  id: 'art',
                  name: 'art'
                },
                {
                  id: 'design',
                  name: 'design'
                }
              ]}
              selectedOption={selectedOption}
              onUpdate={selected => changeStoreView(selected)}
              modeSelector
              isOpen={!selectedOption}
            >
            </DropDownSelect>
        </div>
    </div>
  );
}
