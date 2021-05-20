import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import React, { useState } from 'react'
import './GlobalStyles'
import styled from 'styled-components/macro'
import Navigation from './components/Nav'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer} />

      <PlayerFormWrapper>
        <ul className="App__player-List">
          {players.map((player, index) => (
            <li>
              <Player
                onMinus={() => updateScore(index, -1)}
                onPlus={() => updateScore(index, 1)}
                key={player.name}
                name={player.name}
                score={player.score}
              />
            </li>
          ))}
        </ul>

        <section className="App__functions">
          <section className="buttons">
            <button isActive onClick={resetScores}>
              Reset scores
            </button>
            <button isActive onClick={resetAll}>
              Reset all
            </button>
          </section>
        </section>
      </PlayerFormWrapper>
    </div>
  )

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers(players => [
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }
}

const PlayerFormWrapper = styled.div`
  .functions {
    margin: 20px;
    display: flex;
    align-items: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 10px;
  }
`

export default App
