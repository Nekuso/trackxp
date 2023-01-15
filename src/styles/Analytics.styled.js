import styled from "styled-components";

export const StyledAnalytics = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 93%;
  min-height: 100vh;
  // background: yellow;
  margin: 1rem auto;

  .analytics__header {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    
    h1 {
      font-size: 1.5rem;
    }

    .date__container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1rem;
    }
  }
  
  .analytics__content {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background: red;
  }

  @media screen and (min-width: 768px) {
    margin: 2rem auto;
    
    .analytics__header {
      flex-direction: row;
      align-items: center;
      
      .date__container {
        justify-content: flex-end;
        align-items: center;
        width: 35%;
      }
    }
  }
`;
