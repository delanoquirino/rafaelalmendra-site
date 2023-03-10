import styled from "styled-components";

interface ButtonContainerProps {
  width?: string;
  fontSize?: string;
  backgroundColor?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => (props.width ? props.width : "auto")};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 2.125rem;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  font-weight: 500;

  color: var(--white);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--blue)"};
  border-radius: 4px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: var(--hover-blue);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--hover-blue);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;
