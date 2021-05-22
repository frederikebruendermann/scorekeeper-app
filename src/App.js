import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CreatePage from '../src/pages/CreatePage'
import GamePage from '../src/pages/GamePage'
import HistoryPage from '../src/pages/HistoryPage'

function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')

  return (
    <AppGrid>
      {currentPageId === 'create' && (
        <CreatePage onNavigate={setCurrentPageId} onSubmit={handleSubmit} />
      )}
      {currentPageId === 'game' && (
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onResetScores={resetScores}
          onEndGame={handleEndGame}
          onPlayerUpdate={updateScore}
        />
      )}
      {currentPageId === 'history' && (
        <HistoryWrapper>
          <HistoryPage games={history} onNavigate={setCurrentPageId} />
        </HistoryWrapper>
      )}
    </AppGrid>
  )

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

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ players, nameOfGame }, ...history])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    setCurrentPageId('game')
  }
}

const AppGrid = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  align-items: center;
  position: absolute;
  padding-top: 20px;
  margin: 0;
`

const HistoryWrapper = styled.div`
  height: 80vh;
  overflow-y: auto;
`

export default App
