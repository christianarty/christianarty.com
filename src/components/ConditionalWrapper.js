import PropTypes from "prop-types"

const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children
}
ConditionalWrapper.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool,
  wrapper: PropTypes.func.isRequired,
}

ConditionalWrapper.defaultProps = {
  condition: false,
}

export default ConditionalWrapper
