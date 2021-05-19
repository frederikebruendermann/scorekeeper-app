export default function greet(...rest) {
  if (rest.length > 1) {
    return 'Hi, guys'
  } else if (rest[0] === 'Jerry') {
    return 'Hi, coach'
  } else if (rest[0] === undefined) {
    return 'Hi, stranger'
  } else {
    return `Hi, ${rest[0]}`
  }
}
