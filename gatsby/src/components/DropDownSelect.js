import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import { ChevronLeft } from './Svg.js';
import { useSiteState } from "../context/siteContext"

const  DropDownSelect = ({ className, options, onUpdate, modeSelector }) => {

  const [siteState, setSiteState] = useSiteState()
  const [active, setActive] = useState()
  const [selected, setSelected] = useState(undefined)
  const [init, setInit] = useState(false)
  const [initialValue, setInitialValue] = useState(undefined)

  const setSelectedOption = (option) => {
    setSelected(option)
    setSiteState(prevState => ({
      ...prevState,
      selectOpen: false,
    }))
  }


  useEffect(()=> {
    setSelected(undefined)
    if (siteState.location){
      setInitialValue(siteState.location.substring(1).split('/')[0])
    }
  }, [siteState.location])

  // useEffect(()=> {
  //   if(initialValue){
  //     console.log(initialValue)
  //     const before = initialValue.split('/')[0]
  //     const after = initialValue.slice('/')[1]
  //     console.log(`after`, before)
  //     console.log(initialValue)
  //   }
  // }, [initialValue])

  useEffect(()=> {
    if (init){
      if (onUpdate && selected) {
        onUpdate(selected)
      }
    }
    setInit(true)
  }, [selected])


  return (
    <div className={className}>
      <button 
        onClick={() => setSiteState(prevState => ({
          ...prevState,
          selectOpen: !siteState.selectOpen,
        }))}
        css={css`
          display: grid;
          grid-template-columns: max-content max-content;;
          align-items: center;
        `}
      >
        <span className='h3' css={css`font-size: ${modeSelector ? `var(--font-large)` : `inherit`};`}>
          {selected ? selected : initialValue}
        </span>
        <ChevronLeft css={css`
          width: var(--font-regular);
          height: var(--font-regular);
          display: block;
          transition: 0.3s transform;
          transform: ${siteState.selectOpen ? `rotate(90deg)` : `rotate(270deg)`};
          margin-left: var(--spacing-01);
        `}/>
      </button>
      <div css={css`position: ${modeSelector ? `unset` : `relative`};`}>
        <div css={css`
          display: grid;
          position: absolute;
          background-color: var(--white);
          opacity: ${siteState.selectOpen ? `1` : `0`};
          pointer-events: ${siteState.selectOpen ? `all` : `none`};
          width: ${modeSelector ? `100%` : `auto`};
          transition: opacity 0.3s;
          margin-top: var(--spacing-05);
          top: 100%;
          left: 0;
          z-index: -2;
          border: 1px solid var(--border-color);
          border-radius: var(--standard-radius);
          box-shadow: var(--shadow);
        `}>
          {options?.map(option => (
            <button 
            onClick={() => setSelectedOption(option.name)}
            key={option.id}
            css={css`
              text-align: left;
              padding: var(--spacing-05);
              background: ${active === option.name ? `var(--major)` : `inherit`};
              color: ${active === option.name ? `var(--white)` : `inherit`};
              :hover{
                background: ${active === option.name ? `var(--major)` : `var(--half-major)`};
              }
            `}
            >{option.name}
            </button>
          ))}
        </div>
        {/* <Instructions 
          css={css`
            opacity: ${siteState.selectOpen && siteState.location === `/`? `1` : `0`};
            pointer-events: ${siteState.selectOpen && siteState.location === `/` ? `all` : `none`};
            width: ${modeSelector ? `100%` : `auto`};
        `}>
            Please select which content you would like to see
        </Instructions> */}
      </div>
    </div>
  )
}

const Instructions = styled.div`
  position: absolute;
  background-color: var(--white);
  margin-top: var(--spacing-05);
  padding: var(--spacing-05);
  top: 100%;
  left: calc(100% + var(--spacing-05));
  z-index: -2;
  border: 1px solid var(--border-color);
  border-radius: var(--standard-radius);
  box-shadow: var(--shadow);
  font-size: var(--font-small);
  color: var(--white);
  background-color: var(--major);
`

export default DropDownSelect