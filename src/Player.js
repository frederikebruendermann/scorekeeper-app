import PropTypes from 'prop-types'
import './Player.css'
import Button from './Button'

Player.propTypes = {
  onMinus: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onPlus: PropTypes.func.isRequired,
  score: PropTypes.number,
}

export default function Player({ score, name, onMinus, onPlus }) {
  return (
    <>
      <section className="Player">
        <div className="PlayerName">{name}</div>
        <Button onClick={onMinus}>-</Button>
        <div className="PlayerScore">{score}</div>
        <Button onClick={onPlus}>+</Button>
      </section>
    </>
  )
}
