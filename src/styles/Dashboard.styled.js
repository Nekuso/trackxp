import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 100%;

  .widgets {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: auto;
    background: yellow;
    background: transparent;
  }

  .charts {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0 0 0;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    height: 90%;
    h1 {
      font-size: 1.2rem;
      margin: 0.2rem 0 0.3rem 0;
    }
    .widgets {
      justify-content: space-between;
      gap: 0;
    }
  }
`;
