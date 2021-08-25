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
      <Link css={css`
        border-right: 1px solid var(--grey);
        padding: var(--spacing-05);
        border-radius: 300px 0 0 300px;
        &:hover{
            background: var(--light-grey);
            
          }
        `}
        to={'/'}
      >
        <div css={css`
          display: grid;
          grid-template-columns: var(--size-12) max-content;
          align-items: center;
        `}>
          <div css={css`margin-right: var(--spacing-05);`}>
              <img
                src={`${person.image.asset.url}`}
                alt={person.name}
                css={css`
                  border-radius: 50%;
                  display: block;
                `}
              />
          </div> 
          <div>
            <h1 className="h3">{person.name}</h1>
          </div>
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
  );
}
