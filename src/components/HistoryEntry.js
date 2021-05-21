import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

HistoryEntry.propTypes = {
  nameofGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}

export default function HistoryEntry({ nameofGame, players }) {
  return (
    <>
      <Grid>
        <Title>{nameofGame}</Title>
        <PlayerList>
          {players.map(player => (
            <Player key={player.name}>
              <span>{player.name}</span>
              <span>{player.score}</span>
            </Player>
          ))}
        </PlayerList>
      </Grid>
    </>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 10px;
`
const Title = styled.h2`
  font-weight: 500;
`
const Player = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const PlayerList = styled.ul`
  list-style: none;
`
