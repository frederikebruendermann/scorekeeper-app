import PropTypes from 'prop-types'
import Playerform from './PlayerForm'
import './Player.css'
import Button from './Button'

Playerform.propTypes = {
  onClick: PropTypes.number,
  children: PropTypes.node,
}

export default function Player({ onClick, children }) {
  return (
    <>
      <section className="OnePlayer">
        <div className="PlayerName">John Doe</div>
        <Button onClick={onPlus} ClassName="ButtonPlus">
          +
        </Button>
        <div className="PlayerScore"> 20 </div>
        <Button onClick={onMinus} ClassName="ButtonMinus">
          -
        </Button>
      </section>

      <section className="OnePlayer">
        <div className="PlayerName">Jane Doe</div>
        <Button onClick={onPlus} ClassName="ButtonPlus">
          +
        </Button>
        <div className="PlayerScore"> 20 </div>
        <Button onClick={onMinus} ClassName="ButtonMinus">
          -
        </Button>
      </section>
    </>
  )

  function onPlus(event) {
    event.preventDefault()
  }

  function onMinus(event) {
    event.preventDefault()
  }
}
