import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const Button = ({ children, to, onClick, major, large, className, inline }) => {


  const ButtonCss = ``

  if(to){
    return (
      <Link
        to={to}
        className={className}
        css={css`
        `}
      >
        <button 
          css={css`
            display: inline-grid;
            padding: 10px;
            padding: ${inline ? `0 0 0px` : `7px 16px 6px`};
            background: ${inline ? `transparent` : `var(--major)`};
            color:${inline ? `var(--major)` : `var(--white)`};
            font-size: ${inline ? `inherit` : `var(--font-small)`};
            border-bottom: ${inline ? `1px solid var(--major)` : `none`};
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
  major: PropTypes.bool,
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
