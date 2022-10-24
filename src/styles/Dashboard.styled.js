import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 95%;
  height: 95%;
  background: darkblue;
  h1 {
    color: #000000;
  }
  .widgets {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70%;
    background: yellow;
  }
`;
