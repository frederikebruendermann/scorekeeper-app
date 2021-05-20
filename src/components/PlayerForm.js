import PropTypes from 'prop-types'

Playerform.propTypes = {
  onSubmit: PropTypes.func,
}

export default function Playerform({ onSubmit }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add Player:
        <input name="name" type="text" placeholder="Player name" />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}
