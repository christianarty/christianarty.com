import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

const ContactInput = ({ value, label, type, onChange, textarea }) => {
  return (
    <div
      css={css`
        padding: 1rem;
      `}
    >
      <label
        css={css`
          display: block;
        `}
      >
        {label}:
        {textarea ? (
          <textarea
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        )}
      </label>
    </div>
  )
}

ContactInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
}

ContactInput.defaultProps = {
  textarea: false,
}
export default ContactInput
