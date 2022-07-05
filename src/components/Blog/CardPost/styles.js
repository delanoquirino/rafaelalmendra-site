import styled from "styled-components";

export const Post = styled.div`
  position: relative;

  width: 21.188rem;
  height: 26.188rem;

  display: flex;
  flex-direction: column;

  color: var(--white);
  border-radius: 20px;

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px);
  }

  p {
    padding: 2rem 0 0 2rem;
    margin-bottom: 10rem;

    font-size: 2.625rem;
    font-weight: 500;
    line-height: 3rem;

    color: var(--white);

    @media (max-width: 850px) {
      font-size: 2.2rem;
      line-height: 2.675rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
      padding-left: 2rem;

      font-size: 1.125rem;
      color: var(--white);

      &:last-child {
        font-size: 0.875rem;
      }

      strong {
        font-weight: 500;
      }
    }
  }
`;

export const ImageEffect = styled.div`
  position: absolute;
  z-index: -1;

  width: 21.188rem;
  height: 26.188rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  border-radius: 20px;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";

    width: 100%;
    height: 100%;

    display: block;

    opacity: 0.35;
    border-radius: 20px;
    background-image: linear-gradient(234deg, #000, #000);
  }
`;
