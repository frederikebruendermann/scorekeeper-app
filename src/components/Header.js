import styled from 'styled-components'

export default function Header({ children }) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h2`
  font-size: 25px;
  text-align: center;
  color: #413b89;
`
