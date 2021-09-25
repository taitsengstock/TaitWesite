import React from 'react'
import PropTypes from 'prop-types';
import {breakpoints} from '../styles/GlobalStyles.js';

const Container = ({ children, className }) => {
  const {tablet} = breakpoints
  return (
    <div 
      className={className}
      css={css`
        display: grid;
        grid-template-columns: max-content 1fr;
        min-height: var(--body-height);
        ${tablet}{
          grid-template-columns: 1fr;
        }
    `}>
      {children}
    </div>
  )
}

Container.propTypes = {
}

Container.defaultProps = {
}

export default Container
