import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 100%;
  

  .page__title {
    font-size: 2rem;
    margin: .5rem 0;
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

  .charts {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0 0 0;
    justify-content: space-between;
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    height: 100%;
    
    .page__title {
      font-size: 1.3rem;
      margin: .5rem 0;
    }

    .widgets {
      justify-content: space-between;
      gap: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    .page__title {
      font-size: 1.5rem;
      margin: .5rem 0;
    }
  }
`;
