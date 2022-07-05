import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ContainerCards = styled.main`
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  a {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.275rem;
  margin-top: 2rem;
  margin-bottom: 4.875rem;

  font-size: 2.625rem;
  font-weight: 500;
  color: var(--white);

  @media (max-width: 885px) {
    margin: 2.875rem 0 2.875rem 0;
    font-size: 2.2rem;
  }

  @media (max-width: 575.98px) {
    font-size: 1.575rem;
  }
`;
