import styled from "styled-components";

export const StyledDataTable = styled.div`
  height: 100%;
  width: 100%;
  

  div {
    font-size: 0.7rem;
  }

  .dataTable {
    background: #ffffff69;
    backdrop-filter: blur(10px);
    height: 75vh;

    .cellWithStatus {
      font-size: 0.8rem;
      padding: 4px 8px;
      border-radius: 2rem;
    }
    .Completed {
      background-color: rgba(0, 128, 0, 0.05);
      border: 0.5px solid green;
      color: green;
    }
    .Pending {
      background-color: rgba(255, 217, 0, 0.05);
      border: 0.5px solid goldenrod;
      color: goldenrod;
    }

    .cell__action {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;

      .view__button {
        font-size: 0.8rem;
        padding: 5px 8px;
        border-radius: 2rem;
        background: #4788ff;
        color: white;
        cursor: pointer;
      }
      .delete__button {
        font-size: 0.8rem;
        padding: 5px 8px;
        border-radius: 2rem;
        background: #e8464e;
        color: white;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: auto;
    .dataTable {
      div {
        font-size: 0.6rem;
      }

      .cellWithStatus {
        font-size: 0.7rem;
        padding: 2.5px 5px;
        border-radius: 2rem;
      }

      .cell__action {
        .view__button {
          font-size: 0.7rem;
          padding: 4px 8px;
          color: white;
        }
        .delete__button {
          font-size: 0.7rem;
          padding: 4px 8px;
          border-radius: 2rem;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .dataTable {
      div {
        font-size: 0.8rem;
      }

      .cellWithStatus {
        font-size: 0.8rem;
        padding: 5px 10px;
        border-radius: 2rem;
      }

      .cell__action {
        .view__button {
          font-size: 0.8rem;
          padding: 5px 10px;
          color: white;
        }
        .delete__button {
          font-size: 0.8rem;
          padding: 5px 10px;
          border-radius: 2rem;
        }
      }
    }
  }
`;
