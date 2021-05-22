import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Navigation from '../components/Navigation'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
}

export default function CreatePage({ onSubmit, onNavigate }) {
  return (
    <Grid>
      <Form onSubmit={handleSubmit}>
        <label>
          Name of game:
          <input name="name" type="text" placeholder="e.g. Carcassonne" />
        </label>
        <label>
          Player names:
          <input name="players" type="text" placeholder="e.g. John, Jane" />
        </label>
        <Button>Create game</Button>
      </Form>
      <Navigation
        currentPageId="game"
        onNavigate={onNavigate}
        pages={[
          { title: 'Play', id: 'game' },
          { title: 'History', id: 'history' },
        ]}
      />
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }

    onSubmit(game)
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const Form = styled.form`
  display: grid;
  gap: 12px;
  label {
    display: grid;
    gap: 4px;
  }
  input {
    padding: 4px;
  }
`
