import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button({ children, isActive, onClick }) {
  return (
    <button onClick={onclick} className={isActive ? 'ButtonActive' : 'Button'}>
      {children}
    </button>
  )
}
