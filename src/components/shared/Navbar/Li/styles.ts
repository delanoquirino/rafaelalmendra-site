import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Link = styled.a<{ active?: boolean }>`
  transition: color ease-in-out 0.2s;
  cursor: pointer;
  ${(props) =>
    props.active && {
      color: "var(--blue)",
    }}

  &:hover {
    color: var(--blue);
  }

  button {
    ${(props) =>
      props.active && {
        backgroundColor: "var(--blue)",
        color: "var(--white)",
      }}
  }
`;

export const ButtonContact = styled.button`
  width: 6rem;
  height: 2.25rem;

  font-size: 1rem;
  border-radius: 0.28rem;
  border: 1px solid var(--blue);
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--hover-blue);
    color: var(--white);
  }

  @media (max-width: 850px) {
    width: 90vw;
    height: 3.45rem;

    font-size: 1.2rem;
  }
`;
