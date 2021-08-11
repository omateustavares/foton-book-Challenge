import styled, { css } from "styled-components";

export const Container = styled.button`
  background: #ff6978;
  height: 48px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: var(--white);
  font-weight: 600;
  width: 100%;
  margin-top: 16px;
  transition: filter 0.2s;
  cursor: pointer;

  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);

  &:hover {
    filter: brightness(0.8);
  }
`;
