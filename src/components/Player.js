import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components/macro'

Player.propTypes = {
  onMinus: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onPlus: PropTypes.func.isRequired,
  score: PropTypes.number,
}

export default function Player({ score, name, onMinus, onPlus }) {
  return (
    <>
      <PlayerWrapper>
        <div>{name}</div>
        <Button name="minus" onClick={onMinus}>
          -
        </Button>
        <div>{score}</div>
        <Button name="plus" onClick={onPlus}>
          +
        </Button>
      </PlayerWrapper>
    </>
  )
}

const PlayerWrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  gap: 0px 0px;
  background-color: #f3e7dd;
  gap: 0px 49px;

  div {
    text-align: center;
  }
`
