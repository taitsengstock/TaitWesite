import React, { useContext, useEffect } from 'react';
import StoreViewContext from '../StoreViewContext';
import DropDownSelect from '../DropDownSelect';
import { Link, navigate } from "gatsby"
import ThemeContext from '../ThemeContext.js';
import { css } from 'styled-components';


export default function TitleSection({ person, className }) {

  const [theme, setTheme] = useContext(ThemeContext)
  const [storeView, setStoreView] = useContext(StoreViewContext)

  const changeStoreView = (selected) => {
    navigate('/')
    setStoreView(selected)
  }

  useEffect(() => {
    setTheme(storeView)
  }, [storeView])

  useEffect(() => {
    console.log(`theme`, theme)
  }, [theme])

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
          padding: 0 var(--spacing-05);
        `}>
          <Link to={'/'} >
            <div css={css`display: flex; align-items: center;`}>
              <h3 css={css`color: var(--dark-grey);`}>
                {person.name}/
              </h3>
            </div>
          </Link>
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
            selectedOption={storeView}
            onUpdate={selected => changeStoreView(selected)}
          />
        </div>
    </div>
  );
}
