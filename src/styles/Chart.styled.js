import styled from "styled-components";

export const StyledChart = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  // background: #f5f6f8;
  border: 1px solid #e0e0e0;
  transition: all 0.3s cubic-bezier(0.47, 0, 0.37, 1.47);
  cursor: pointer;
  background: white;

  
  :hover {
    box-shadow: black 10px 10px 0px;
    transform: translate(-5px, -5px);
    border: 1px solid black;
  }
  height: auto;
  * {
    color: #000000;
  }

  .title {
    font-weight: 700;
    font-size: 1.3rem;
    color: #00000091;
  }

  @media screen and (min-width: 768px) {
    padding: 0.7rem;
    width: 69%;
    border-radius: 0.5rem;
    height: 100%;
    height: auto;

    .title {
      font-weight: 700;
      font-size: 0.6rem;
      color: #00000091;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 1.1rem;
    width: 72%;
    border-radius: 1rem;

    .title {
      font-weight: 700;
      font-size: 1vw;
      color: #00000091;
    }
  }

  // @media screen and (min-width: 1280px) and (min-height: 800px) {
  //   height: 60%;
  // }

  // @media screen and (min-width: 1024px) and (min-height: 600px) {
  //   height: 100%;
  // }
`;
