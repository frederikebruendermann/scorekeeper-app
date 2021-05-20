import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('HistoryEntry has name & score', () => {
    render(<HistoryEntry name={'John Doe'} score={20} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
  })
})
