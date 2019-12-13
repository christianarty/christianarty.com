import React from "react"
import PropTypes from "prop-types"

const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children
}
ConditionalWrapper.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.func,
}

export default ConditionalWrapper
