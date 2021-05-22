import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Player from '../components/Player'
import Header from '../components/Header'

GamePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScore: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScore,
  onEndGame,
}) {
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      {players.map(player => (
        <Player name={player.name} score={player.score} />
      ))}
      <Button onClick={onResetScore}>Reset Scores</Button>
      <Button onclick={onEndGame}>End Game</Button>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;
`
