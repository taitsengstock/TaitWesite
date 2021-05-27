import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const Button = ({ children, to, onClick, large, className }) => {

  const GhostButtonCss = `
    display: inline-grid;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: var(--button-radius); 
    &:hover {
      background: var(--ghost);
    }
  `

  if(to){
    return (
      <Link
        to={to}
        className={className}
      >
        <button 
          className={ large ? 'h2' : 'h3' }
          css={css`
          ${GhostButtonCss}
          `}
        >
          {children}
        </button>
      </Link>
    )
  }
  else if(onClick){
    return (
      <button
        onClick={e => onClick(e)}
        className={className}
        css={css`
          ${GhostButtonCss}
        `}
      >
        {children}
      </button>
    )
  }
  else {
    return null
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  large: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
}


export default Button
