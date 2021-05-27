import React from 'react'
import PropTypes from 'prop-types';

const Select = ({ onChange, value, className, children }) => {

  return (
    <div css={css`
    `}>
      <select
          value={value}
          onChange={e => onChange(e)}
      >
          {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
}

// Select.defaultProps = {
//   children:
//   <>
//   <option value="one">One</option>
//   <option value="two">Two</option>
//   <option value="three">Three</option>
//   </>,
//   onChange: e => null
// }

export default Select
