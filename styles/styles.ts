import styled, { css, keyframes } from "styled-components";
const slide = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);

  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);

  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.main`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  padding-bottom: 60px;
`;
export const ContentHeader = styled.div`
  margin-top: 50px;
  display: flex;

  width: 100%;

  padding: 0 20px;

  > div {
    animation: ${slide} 0.8s ease-out;
  }

  justify-content: center;
  margin-bottom: 30px;
`;

export const ContentHome = styled.div``;

export const ImgCircleSmall = styled.div`
  position: absolute;
  z-index: 0;
  top: -7px;
  right: 110px;
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0px;
  right: -23px;
`;

export const BookItem = styled.div`
  img {
    max-width: 100%;
  }

  div {
    height: 100%;
    display: flex;

    max-height: 167px;

    @media (max-width: 366px) {
      max-height: initial;
      width: 100%;
      img {
        width: 100%;
      }
    }

    background: green;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > p {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    margin-top: 10px;

    color: rgba(49, 49, 49, 0.8);
  }

  > p:last-child {
    font-size: 10px;
    line-height: 12px;
    margin-top: 5px;

    color: rgba(49, 49, 49, 0.8);
  }
`;

export const BookGrid = styled.div`
  @media (max-width: 412px) {
    grid-template-columns: repeat(auto-fit, 94px);
  }

  @media (max-width: 366px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  }

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  gap: 20px;
  margin: 0 20px;
`;

interface BookProps {
  background: string;
}

export const Book = styled.div<BookProps>`
  background: ${(props) => props.background};

  height: 139px;
  min-width: 272px;

  display: flex;

  &:last-child {
    height: 128px;
    min-width: 250px;
  }

  width: 272px;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;

  & + & {
    margin-left: 10px;
  }
`;

export const Books = styled.div`
  animation: ${slideRight} 1s ease-out;

  background: #fffcf9;
  display: flex;
  align-items: center;
  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;
  position: relative;

  margin-left: 20px;

  margin-top: 15px;
`;

export const TitleBook = styled.h1`
  font-weight: bold;
  font-size: 27px;
  line-height: 36px;

  letter-spacing: 2px;

  color: #fefefe;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 36px;

  letter-spacing: 2px;

  color: #fefefe;
`;

export const TitleHello = styled.div`
  margin-left: 20px;
  display: flex;
  margin-bottom: 16px;

  animation: ${slide} 0.8s ease-out;

  h1:first-child {
    color: #54565a;
  }

  h1 {
    font-size: 24px;
    line-height: 29px;
    color: #ff6978;
  }

  h1:nth-child(2) {
    margin-left: 6px;
  }

  > div {
    margin-left: 10px;
  }
`;

export const ImageDiv = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  min-width: 88px;
  min-height: 130px;

  animation: ${slide} 1.8s ease-out;
`;
export const ImageDivTriangle = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  z-index: 1;
`;

export const NavigationBar = styled.div`
  background: var(--white);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 52px;
  position: fixed;
  bottom: 0;
  width: 100%;

  > button:nth-child(1) svg {
    margin-bottom: 10px;
  }

  > button:nth-child(2) svg {
    margin-bottom: 10px;
  }

  > button:nth-child(3) svg {
    margin-bottom: 10px;
  }
`;

export const ButtonNavigation = styled.button`
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;

  &:hover {
    color: #000000;
    p,
    svg {
      color: #000000;
    }
  }

  p {
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #bfbebf;
  }

  svg {
    color: #bfbebf;
  }
`;

export const TitleReview = styled.h1`
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;

  margin-top: 16px;
  margin-left: 32px;
`;

export const TitleReviewViews = styled.div`
  font-weight: normal;
  font-size: 10px;
  line-height: 9px;

  margin-top: 6px;

  color: rgba(106, 103, 103, 0.8);
  margin-left: 32px;
  span {
    & + span {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      position: relative;

      &::before {
        content: "";
        width: 2px;
        height: 2px;
        border-radius: 2px;
        background: #6a6767;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const TextContent = styled.p`
  margin: 0 32px;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;

  margin-top: 6px;

  color: rgba(107, 107, 107, 0.8);
`;

export const HomeCircleImg = styled.div`
  position: absolute;

  top: -20px;
  right: -32px;
`;

export const HomeCircleHead = styled.div`
  position: absolute;

  top: -40px;
  right: 0;
`;

export const CircleHookedImg = styled.div`
  position: absolute;
  top: -2px;
  left: -35px;
  z-index: 1;
`;

export const LineImgHooked = styled.div`
  position: absolute;
  bottom: 12px;
  left: -35px;
  z-index: 1;
`;

export const ImgCircle = styled.div`
  width: 73px;
  position: relative;
`;

export const TitleAddNewBook = styled.div`
  margin-left: 20px;
  display: flex;
  margin-bottom: 16px;

  animation: ${slide} 0.8s ease-out;

  h1 {
    font-size: 24px;
    line-height: 29px;
    color: #ff6978;
    margin-top: 50px;
  }
`;

export const ContentForm = styled.div`
  margin: 0 20px 0 20px;
  display: flex;
  margin-bottom: 16px;

  animation: ${slide} 0.8s ease-out;
`;
