import styled from 'styled-components'

export const ListUsers = styled.aside`
  width: 100%;
  max-width: 40rem;
  max-height: 72vh;
  overflow-y: auto;

  display: grid;
  gap: 1rem;
  padding: 1rem;

  gap: 1rem;
  margin: 0 auto 2rem;

  @media all and (min-width: 56rem) {
    max-width: 80rem;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1rem;
  }
`
