import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { graphql, Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import {breakpoints} from '../styles/GlobalStyles.js';
import { useSiteState } from "../context/siteContext"
import Main from '../components/Main';
import Container from '../components/Container'
import styled from 'styled-components';
import { Rarr } from '../components/Svg';

export default function KeySelect({  }) {
  const {tablet, mobile} = breakpoints

  const links = [
    {
      name: `art`,
      link: `/art`,
    },
    {
      name: `design`,
      link: `/design`,
    },
  ]

  // Key Events
  const [cursor, setCursor] = useState(0)
  const [active, setActive] = useState(null)
  useEffect(()=> {
    document.addEventListener("keydown", e => {
      if (e.key === 'ArrowUp' && cursor > 0) {
          // console.log(`keyedup`)
          setCursor(cursor - 1)
      } else if (e.key === 'ArrowDown' && cursor < links.length - 1) {
          setCursor(cursor + 1)
      } else if (e.key === 'Enter' && active) {
        navigate(`/${active}`)
      }
    })
  }, [cursor, active])

  useEffect(()=> {
    if(cursor){
      setActive(()=> links[cursor].name) 
    } else {
      setActive(()=> links[0].name) 
    }
  },[cursor])

  useEffect(()=> {
    console.log(`active`, active)
  },[active])

  return (
    <div css={css` 
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: grid;
      align-items: center;
      justify-items: center;
    `}>
      <div css={css`
        display: grid;
      `}>
        {links.map((link, index)=> (
          <Link
           to={link.link} 
           tabIndex={index} 
           css={css`
            background-color: ${cursor === index ? `var(--major)` : `inherit`};
           `}
          >{link.name}</Link>
        ))}
      </div>
    </div>
  );
}
