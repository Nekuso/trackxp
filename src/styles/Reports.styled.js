import styled from "styled-components";

export const StyledReports = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 93%;
  min-height: 100vh;
  //   background: yellow;
  gap: 1rem;
  margin: 1rem auto;

  .reports__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      font-size: 1.5rem;
    }
    .second__report {
      display: none;
    }

    .date {
      display: none;
      font-size: 1rem;
      font-weight: 700;
    }
    .right__actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .date__buttons {
        display: flex;
        border-radius: 0.7rem;
        overflow: hidden;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        button {
          padding: 0.6rem;
          background: #f1f1f1;
          border: none;
          font-size: 0.6rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          :nth-child(2) {
            border-left: 1px solid gray;
          }
        }
        .active {
          background: black;
          color: white;
        }
      }
    }

    i {
      font-size: 1.1rem;
      color: #f1f1f1;
      background: black;
      padding: 0.6rem;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid black;
      transition: all 0.2s ease-in-out;

      :hover {
        scale: 1.1;
        background: #f1f1f1;
        color: black;
      }
    }
  }

  .reports__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    // background: red;
    table {
      background: white;
      width: 100%;
      border: 1px solid black;
      border-collapse: collapse;
      text-align: center;
      th {
        border: 1px solid black;
        padding: 0.5rem;
      }
      td {
        border: 1px solid black;
        padding: 0.5rem;
      }
    }
    .report__totals {
      width: 40%;
      border: 1px solid black;
      padding: 1rem 0;
    }
  }

  @media screen and (min-width: 768px) {
    .reports__header {
      h1 {
        font-size: 2rem;
      }
      .right__actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .date__buttons {
          display: flex;
          border-radius: 0.7rem;
          overflow: hidden;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
          button {
            background: #f1f1f1;
            border: none;
            padding: 0.8rem;
            font-size: 0.9rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            :nth-child(2) {
              border-left: 1px solid gray;
            }
          }
        }
      }
    }
    .reports__content {
      table {
      }
    }
  }

  @media print {
    height: 100%;
    .reports__header {
      .first__report {
        display: none;
      }
      .second__report {
        display: block;
      }
      .date {
        display: block;
      }
      .right__actions {
        display: none;
      }
    }
  }
`;