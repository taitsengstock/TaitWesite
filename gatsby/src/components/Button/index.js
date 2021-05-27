import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const Button = ({ children, to, onClick, primary, large, className }) => {

  if(to){
    return (
      <Link
        to={to}
        className={className}
      >
        <button 
          className={ large ? 'h2' : 'h3' }
          css={css`
            display: inline-grid;
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
