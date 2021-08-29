import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const Label = ({ children, to, onClick, primary, large, className }) => {
  return (
    <div css={css`
      border-radius: var(--size-05);
      background: var(--grey);
      font-size: var(--font-small);
      display: inline-block;
      margin-right: var(--spacing-05);
      margin-bottom: var(--spacing-05);
      padding: var(--spacing-03) var(--spacing-05);
    `}>
      {children}
    </div>
  )

}

Label.propTypes = {
}

Label.defaultProps = {
}


export default Label
