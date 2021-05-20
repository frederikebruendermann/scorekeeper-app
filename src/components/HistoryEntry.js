import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Heading from './Header'

HistoryEntry.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  title: PropTypes.string,
}

export default function HistoryEntry({ name, score, title }) {
  return (
    <>
      <div>
        <Heading>{title}</Heading>
        <PlayerList>
          <Name>{name}</Name>
          <Score>{score}</Score>
        </PlayerList>
      </div>
    </>
  )
}

const Name = styled.span`
  font-weight: 500;
`
const Score = styled.div`
  width: 3ch;
`

const PlayerList = styled.section`
  display: flex;
  justify-content: space-between;
`
