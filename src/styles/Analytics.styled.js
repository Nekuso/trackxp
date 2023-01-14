import styled from "styled-components";

export const StyledAnalytics = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 93%;
  min-height: 100vh;
  background: yellow;
  margin: 1rem auto;

  h1 {
    color: black;
    font-size: 1.5rem;
  }

  .analytics__content {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;
