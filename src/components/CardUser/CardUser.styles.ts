import styled from 'styled-components'

export const Card = styled.div`
  padding: 4.8rem 3rem 3.2rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #ffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 2rem;

  gap: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
    }
  }

  strong {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    text-align: center;

    margin: unset;
  }

  span {
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #fa4a0c;

    strong {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 375px) {
    max-width: 330px;
    padding: 4.8rem 6.9rem 3.2rem;

    gap: 1.6rem;

    div {
      width: 177px;
    }
  }
`
