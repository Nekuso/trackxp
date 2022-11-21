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
      font-size: 1.7rem;
    }

    .new__button {
      position: relative;
      z-index: 1;
      cursor: pointer;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.6rem 1.1rem;
      border: none;
      border-radius: 2rem;
      color: white;
      background: black;
      transition: all 0.4s ease-in-out;
      overflow: hidden;

      :before {
        content: "";
        position: absolute;
        border: none;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #fafafa;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
      }
      :hover {
        border: 1px solid black;
        :before {
          width: 100%;
        }
        color: black;
        transform: scale(1.05);
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
    -webkit-justify-content: flex-start;
    padding: 2rem 0;
    height: auto;

    .dashboard__header {
      margin: 0.5rem 0;
      .page__title {
        font-size: 1.3rem;
      }

      .new__button {
        font-size: 0.6rem;
        font-weight: 700;
      }
    }

    .widgets {
      height: auto;
      justify-content: space-between;
      gap: 0;
    }

    .charts {
      flex-wrap: no-wrap;
      margin: 0.8rem 0 0 0;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    // height: auto;
    .dashboard__header {
      margin: 0.5rem 0;
      .page__title {
        font-size: 1.8rem;
      }
      .new__button {
        padding: 0.6rem 1.5rem;
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
`;
