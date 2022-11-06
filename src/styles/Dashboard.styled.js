import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 100%;
  
  .dashboard__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    .page__title {
      font-size: 2rem;
    }

    .new__button {
      cursor: pointer;
      font-size: .9rem;
      font-weight: 700;
      padding: .6rem 1.1rem;
      border: none;
      border-radius: 2rem;
      color: white;
      background: black;
      transition: all .2s ease-in-out;
      
      &:hover {
        transform: scale(1.1);
      }
    }
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
    
    .dashboard__header {
      margin: .5rem 0;
      .page__title {
        font-size: 1.3rem;
      }

      .new__button {
        font-size: .6rem;
        font-weight: 700;
      }
    }

    .widgets {
      justify-content: space-between;
      gap: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    .dashboard__header {
      margin: .5rem 0;
      .page__title {
        font-size: 1.8rem;
      }
      .new__button {
        padding: .6rem 1.5rem;
        font-size: .8rem;
        font-weight: 700;
      }
    }
  }
`;
