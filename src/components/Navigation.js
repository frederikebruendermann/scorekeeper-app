import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

Navigation.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}

export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <NavWrapper>
      {pages.map(({ title, id }) => (
        <NavButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title}
        </NavButton>
      ))}
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;

  button: {
    width: 50%;
  }
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
