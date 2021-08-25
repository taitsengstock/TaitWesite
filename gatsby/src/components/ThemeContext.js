import React, { useState, useLayoutEffect, useContext, useEffect } from 'react'
import styled, { css, ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme.js';

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('design')

    return(
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Theme theme={theme}/>
          {children}
      </ThemeContext.Provider>
    )
}

export default ThemeContext;