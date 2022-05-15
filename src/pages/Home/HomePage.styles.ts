import styled from 'styled-components'

export const HomeSection = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgb(245, 245, 248);

  strong {
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Card = styled.div`
  padding: 4.8rem 3rem 3.2rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 2rem;

  gap: 1.6rem;

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
    div {
      width: 177px;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.6rem;

  padding-top: 3rem;
`

export const VerticalButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`
