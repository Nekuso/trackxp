import styled from "styled-components";

export const StyledStack = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  oveflow-x: hidden;
  padding: 2.5rem 0;

  .stack__content {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    .stack__title {
      text-align: center;
      line-height: 1.2;
      font-size: 4vw;

      mark {
        font-weight: 900;
        font-size: 6vw;
        background: none;
        color: #5773db;
      }
    }

    .stack__images {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 7%;

      .stack__image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 20%;
        img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .stack__content {
      width: 90vw;
      .stack__title {
        font-size: 3vw;
        mark {
          font-size: 4vw;
        }
      }
      .stack__images {
        .stack__image {
          flex: 1;
        }
      }
    }

    @media screen and (min-width: 1024px) {
        padding: 5rem 0;
      .stack__content {
        width: 85vw;
        gap: 2rem;
        .stack__title {
          font-size: 2vw;
          mark {
            font-size: 3vw;
          }
        }
      }
    }
  }
`;
