import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContentProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  label {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 22px;
  }
`;
export const Content = styled.div<ContentProps>`
  background: var(--white);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid none;
  color: #232129;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 38px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);

  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: var(--blue-two);
      border-color: var(--blue-two);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: var(--blue-two);
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--text);
    font-weight: 700;
    width: 77%;
    &::placeholder {
      color: var(--text);
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--red);
    color: #fff;
    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
