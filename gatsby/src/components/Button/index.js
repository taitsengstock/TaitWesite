import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const Button = ({ children, to, onClick, primary, large, className }) => {


  const ButtonCss = ``

  if(to){
    return (
      <Link
        to={to}
        className={className}
        css={css`
          ${ButtonCss}
        `}
      >
        <button 
          css={css`
            display: inline-grid;
            padding: 10px;
            padding: 6px 16px 8px;
            background: var(--blue);
            color: var(--white);
            font-size: var(--font-small);
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
        className={ `${large ? 'h2' : 'h3'} ${className}` }
        onClick={e => onClick(e)}
        css={css`
          ${ButtonCss}
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
