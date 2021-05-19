import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import React, { useState } from 'react'
import './GlobalStyles'
import styled from 'styled-components/macro'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'Jane Doe', score: 120 },
  ])

  return (
    <PlayerFormWrapper>
      {players.map((player, index) => (
        <Player
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}
      <section className="functions">
        <PlayerForm onSubmit={createPlayer} />
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
  )

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }

  function handleMinus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
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
