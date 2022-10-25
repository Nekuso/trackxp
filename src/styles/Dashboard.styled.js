import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 95%;
  height: 100%;
  // background: darkblue;
  background: transparent;
  h1 {
    color: #000000;
  }
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

  @media screen and (min-width: 768px) {
    height: 95%;
    h1 {
      font-size: 1.2rem;
      margin: .2rem 0 .3rem 0;
    }
    .widgets {
      justify-content: space-between;
      gap: 0;
    }
  }
`;
