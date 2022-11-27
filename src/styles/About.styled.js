import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .about__content {
    width: 90vw;
    min-height: 90%;
    background: red;
    h1 {
        text-align: center;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: 80vw;
  }
`;
