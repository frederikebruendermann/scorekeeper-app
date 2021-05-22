import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import HistoryEntry from '../components/HistoryEntry'
import Navigation from '../components/Navigation'

HistoryPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfGame: PropTypes.string,
      players: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
      ),
    })
  ),
}

export default function HistoryPage({ games, onNavigate }) {
  return (
    <Grid>
      <div>
        {games.map((game, index) => (
          <HistoryEntry
            key={index}
            nameOfGame={game.nameOfGame}
            players={game.players}
          />
        ))}
      </div>
      <Navigation
        currentPageId="history"
        onNavigate={onNavigate}
        pages={[
          { title: 'Play', id: 'play' },
          { title: 'History', id: 'history' },
        ]}
      />
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
