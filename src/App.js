import Player from './Player'
import PlayerForm from './PlayerForm'
import Button from './Button'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'Jane Doe', score: 120 },
  ])

  return (
    <div className="App">
      {players.map(player => (
        <Player key={player.name} name={player.name} score={player.score} />
      ))}

      <Button>Reset score</Button>
      <Button>Reset all</Button>
      <PlayerForm onSubmit={createPlayer} />
    </div>
  )

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
