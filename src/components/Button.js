// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

// Button.propTypes = {
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node,
// }

// export default function Button({ children, isActive, onClick }) {
//   return (
//     <PlayerButton onClick isActive>
//       {children}
//     </PlayerButton>
//   )
// }

const Button = styled.button`
  padding: 12px;
  border: none;
  background: ${props => (props.isActive ? '#413b89' : '#de7657')};
  color: aliceblue;
  box-shadow: 2px #d3d1ed;
  line-height: 15px;
`

export default Button
