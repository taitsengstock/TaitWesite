import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { css } from 'styled-components';
import {breakpoints} from '../styles/GlobalStyles.js';
import { ChevronLeft } from './Svg.js';

const  DropDownSelect = ({ className, options, selectedOption, onUpdate }) => {

  const [selected, setSelected] = useState(selectedOption)
  const [open, setOpen] = useState(false)

  const setSelectedOption = (option) => {
    setSelected(option)
    setOpen(false)
  }

  useEffect(()=> {
    if (onUpdate && selected) {
      onUpdate(selected)
    }
  }, [selected])
  
  return (
    <div>
      <button 
        onClick={() => setOpen(!open)}
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
      >
        {selected} 
        <ChevronLeft css={css`
          width: var(--font-regular);
          height: var(--font-regular);
          display: block;
          transition: 0.3s transform;
          transform: ${open ? `rotate(90deg)` : `rotate(270deg)`};
        `}/>
      </button>
      <div css={css`position: relative;`}>
        <div css={css`
          display: grid;
          position: absolute;
          background-color: var(--white);
          opacity: ${open ? `1` : `0`};
          pointer-events: ${open ? `all` : `none`};
        `}>
          {options?.map(option => (
            <button 
            onClick={() => setSelectedOption(option.name)}
            key={option.id}
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