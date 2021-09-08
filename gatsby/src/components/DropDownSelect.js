import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import { ChevronLeft } from './Svg.js';

const  DropDownSelect = ({ className, options, selectedOption, onUpdate, modeSelector }) => {

  const [selected, setSelected] = useState(selectedOption)
  const [open, setOpen] = useState(false)
  const [init, setInit] = useState(false)

  const setSelectedOption = (option) => {
    setSelected(option)
    setOpen(false)
  }

  useEffect(()=> {
    setSelected(selectedOption)
  }, [selectedOption])

  useEffect(()=> {
    console.log(`selected from dropdown`, selected)
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
        onClick={() => setOpen(!open)}
        css={css`
          display: grid;
          grid-template-columns: max-content max-content;;
          align-items: center;
        `}
      >
        <span className='h3' css={css`font-size: ${modeSelector ? `var(--font-large)` : `inherit`};`}>{selected}</span>
        <ChevronLeft css={css`
          width: var(--font-regular);
          height: var(--font-regular);
          display: block;
          transition: 0.3s transform;
          transform: ${open ? `rotate(90deg)` : `rotate(270deg)`};
          margin-left: var(--spacing-01);
        `}/>
      </button>
      <div css={css`position: ${modeSelector ? `unset` : `relative`};`}>
        <div css={css`
          display: grid;
          position: absolute;
          background-color: var(--white);
          opacity: ${open ? `1` : `0`};
          pointer-events: ${open ? `all` : `none`};
          width: ${modeSelector ? `100%` : `auto`};
          margin-top: var(--spacing-05);
          top: 100%;
          left: 0;
          z-index: 2;
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
              :hover{
                background: var(--hover);
              }
            `}
            >{option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

DropDownSelect.defaultProps = {
 options: [
   {
     id: '1',
     name: 'option 1'
   },
   {
    id: '2',
    name: 'option 2'
   },
   {
    id: '3',
    name: 'option 3',
   },
 ],
 selectedOption: `option 1`,
}

export default DropDownSelect