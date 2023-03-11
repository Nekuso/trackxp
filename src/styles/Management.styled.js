import styled from "styled-components";

export const StyledManagement = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 100%;
  z-index: 1;

  .management__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    -webkit-justify-content: flex-start;
    padding: 2rem 0;
    height: auto;

    .management__header {
      margin: 0.5rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 90%;

    .management__header {
      margin: 0.5rem 0;
    }
  }
`;
