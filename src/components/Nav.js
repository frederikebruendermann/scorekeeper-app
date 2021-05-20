import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Nav.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.string,
}

export default function Nav({ isActive, onClick, children }) {
  return (
    <NavWrapper>
      <Button onClick={onClick} isActive>
        Play
      </Button>
      <Button onClick={onClick} isActive="false">
        History
      </Button>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
  gap: 2px;

  button: {
    width: 50%;
  }
`

const Button = styled.button`
  padding: 12px;
  border: none;
  background: ${props => (props.isActive ? '#413b89' : '#de7657')};
  color: aliceblue;
  box-shadow: 2px #d3d1ed;
  line-height: 15px;
`
