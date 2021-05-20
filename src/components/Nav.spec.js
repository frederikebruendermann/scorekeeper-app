import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './Nav'

describe('Nav', () => {
  it('has a navItem called Play', () => {
    render(<Nav navItems={('Play', 'History')} />)

    expect(screen.getByText('Play')).toBeInTheDocument()
  })
})
