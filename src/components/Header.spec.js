import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('has a string as title says Carcassonne', () => {
    render(<Header>Carcassonne</Header>)

    expect(screen.getByText('Carcassonne')).toBeInTheDocument()
  })
})
